
const Profile = require("../models/Profile")
const User = require("../models/User")
const Course = require("../models/Course")
const { uploadImageToCloudinary } = require("../utils/imageUploader")
const cloudinary = require("cloudinary").v2



// as after signing up, while creating the user we also had created the profile doc..so we need to update that profile only


// *updateProfile handler func
exports.updateProfile = async ( req , res )=>{
    try {
        
        // get data
        const {
            firstName = "",
            lastName = "",
            dateOfBirth = "",
            about = "",
            contactNumber = "",
            gender = "",
          } = req.body

        // get userId ..as the user is loggedin of remember req.user = decode
        const id = req.user.id;

        // validation
        // if(!gender ||!contactNumber || !id){
        //     return res.status(400).json(
        //         {
        //             success:false,
        //             message:`All fields are required`
        //         }
        //     )
        //     }


        // find the profile
        const userDetails = await User.findById(id)
        const profileId = userDetails?.additonalDetails;
        const profileDetails = await Profile.findById(profileId);

        const user = await User.findByIdAndUpdate(id, {
            firstName,
            lastName,
          })
        await user.save()

        // update the profile
        // as the profileDetails is an object 
        profileDetails.dateOfBirth = dateOfBirth;
        profileDetails.about =about;
        profileDetails.contactNumber = contactNumber;
        profileDetails.gender = gender;

        await profileDetails.save(); //we can also use findbyidandupdate method.
        
        // Find the updated user details
        const updatedUserDetails = await User.findById(id)
        .populate("additonalDetails")
        .exec()

        // return res
        return res.status(200).json(
            {
                success:true,
                message:`Profile updated successfully`,
                updatedUserDetails
            }
        )

    } catch (error) {
        console.log(error);
        return res.status(500).json(
            {
                success:false,
                message:`Error in updating the profile, kindle try again`,
                error:error.message
            }
        )
    }
}






// *deleteAccount handler func
exports.deleteAccount = async ( req , res ) =>{
    try {
        // TODO: Find More on Job Schedule
		// const job = schedule.scheduleJob("10 * * * * *", function () {
		// 	console.log("The answer to life, the universe, and everything!");
		// });
		// console.log(job);
        
        // get Id
        // as the profileDetails is an object 
        const userId  = req.user.id ;
        
        // validation ->user with that id exist or not
        const userDetails = await User.findById(userId)
        if(!userDetails){
            return res.status(400).json(
            {
                success:false,
                message:`User not found`
            }
            )
        }
               
        // delete profile also
        await Profile.findByIdAndDelete({
            _id: userDetails?.additonalDetails,
          })
        
        // TODO update the enrolledAccount in Course model
        for (const courseId of userDetails.courses) {
            await Course.findByIdAndUpdate(
              courseId,
              { $pull: { studentsEnrolled: userId } },
              { new: true }
            )
          }

        //   delete the profile img from cloudinary
        const profileID= userDetails?.image.split("/").pop().split(".")[0];
        if(profileID.includes("?") && profileID.includes("=")){
            console.log(`no image uploaded to cloudinary`);
        }
        else{
            try {
                console.log(`Deleting displayPicture...`, profileID);
                await cloudinary.uploader.destroy(`StudyNotion/${profileID}` ,function(error,result) {
                    console.log(result, error) });
            } catch (error) {
                console.log(`Unable to delete profile pic from cloudinary`);
                console.log(error.message);
            }
        }
        
        // delete user
        await User.findByIdAndDelete({_id:userId}) 


        // return res
        return res.status(200).json(
            {
                success:true,
                message:`User deleted successfully`,
            }
        )

        // await CourseProgress.deleteMany({ userId: id })  

    } catch (error) {
        console.log(error);
        return res.status(500).json(
            {
                success:false,
                message:`User Cannot be deleted successfully`,
                error:error.message
            }
        )
    }
}


// TODO: Explore-> crone job , schedule delete







// *getUserDetailsOfUser
exports.getUserDetails = async ( req , res )=>{
    try {
        
        // get data
        // as the profileDetails is an object 
        const userId = req?.user?.id;

        // validation ->user with that id exist or not
        const userDetails = await User.findById(userId).populate("additonalDetails").exec();
		console.log(userDetails);

        if(!userDetails){
            return res.status(400).json(
                {
                    success:false,
                    message:`User not found`
                }
            )
        }

        // return res
        return res.status(200).json(
            {
                success:true,
                message:`User deatails successfully fetched`,
                data:userDetails
            }
        )

        

    } catch (error) {
        console.log(error);
        return res.status(500).json(
            {
                success:false,
                message:`Error in fetching the user details`,
                error:error.message
            }
        )
    }
}





// *updateDisplayPicture handler func
exports.updateDisplayPicture = async(req , res)=>{
    try {
            // fetch data
            const displayPicture = req.files.displayPicture;
            const userId = req.user.id;

            const image = await uploadImageToCloudinary(
                displayPicture,
                process.env.FOLDER_NAME,
                1000,
                1000
            );

            console.log(image);

            const updateProfile = await User.findOneAndUpdate(
                {_id:userId},
                {image:image.secure_url},
                {new:true},
            );

            return res.status(200).json(
                {
                    success:true,
                    message:`Image Updated successfully`,
                    data:updateProfile,
                }
            )

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: error.message,
    });
    }
}





// *getEnrolled courses handler func
exports.getEnrolledCourses = async (req ,res)=>{
    try {
        const userId = req.user.id;
 
        const userDetails = await User.findOne({_id:userId})
        .populate({
            path:'courses',
            populate: {
                path: "courseContent",
                populate:{
                    path: "subSection",
                },
            },
        })
        .exec();

        if(!userDetails){
            return res.status(400).json({
                success: false,
                message: `Could not find user with id: ${userDetails}`,
              });
        }

        return res.status(200).json({
            success: true,
            data: userDetails.courses,
          })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: error.message,
          })
        }
}