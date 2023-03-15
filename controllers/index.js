

// Pick up a parcel
// router.put('/parcels/:id/pickup', async (req, res) => {
//     try {
//         const parcel = await Parcel.findById(req.params.id);
//         if (!parcel) {
//             return res.status(404).send('Parcel not found');
//         }

//         if (parcel.status !== 'created') {
//             return res.status(400).send('Parcel already picked up or delivered');
//         }

//         const biker = await Biker.findById(req.user.id);
//         if (!biker) {
//             return res.status(404).send('Biker not found');
//         }
//         // update parcel status to picked up
//         parcel.status = 'picked up';
//         parcel.pickedUpBy = biker._id;
//         parcel.pickedUpAt = new Date();
//         await parcel.save();

//         res.send('Parcel successfully picked up');

//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Internal Server Error');
//     }
// });


