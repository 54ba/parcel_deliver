
const senders = [
    {
        name: 'Sender 1',
        _id: '616f4b59f16b5e46cb68c551'
    },
    {
        name: 'Sender 2',
        _id: '616f4b59f16b5e46cb68c552'
    },
    {
        name: 'Sender 3',
        _id: '616f4b59f16b5e46cb68c553'
    },
    {
        name: 'Sender 4',
        _id: '616f4b59f16b5e46cb68c554'
    },
    {
        name: 'Sender 5',
        _id: '616f4b59f16b5e46cb68c555'
    }
];




const bikers = [
    {
        name: 'Biker 1',
        _id: '616f4b59f16b5e46cb68c561'
    },
    {
        name: 'Biker 2',
        _id: '616f4b59f16b5e46cb68c562'
    },
    {
        name: 'Biker 3',
        _id: '616f4b59f16b5e46cb68c563'
    },
    {
        name: 'Biker 4',
        _id: '616f4b59f16b5e46cb68c564'
    },
    {
        name: 'Biker 5',
        _id: '616f4b59f16b5e46cb68c565'
    },
    {
        name: 'Biker 6',
        _id: '616f4b59f16b5e46cb68c566'
    },
    {
        name: 'Biker 7',
        _id: '616f4b59f16b5e46cb68c567'
    },
    {
        name: 'Biker 8',
        _id: '616f4b59f16b5e46cb68c568'
    },
    {
        name: 'Biker 9',
        _id: '616f4b59f16b5e46cb68c569'
    },
    {
        name: 'Biker 10',
        _id: '616f4b59f16b5e46cb68c570'
    }
];
const parcels = [


    {
        sender: senders[0]._id,
        pickupAddress: '123 Main St',
        dropoffAddress: '456 Elm St',
        biker: bikers[0]._id,
        status: 'delivered',
        pickupTimestamp: new Date('2022-03-15T12:00:00Z'),
        deliveryTimestamp: new Date('2022-03-16T12:00:00Z')

    },
    {
        sender: senders[0]._id,
        pickupAddress: '789 Oak St',
        dropoffAddress: '1010 Pine St',
        biker: bikers[0]._id,
        status: 'pickedup',
        pickupTimestamp: new Date('2022-03-16T12:00:00Z')
    },
    {
        sender: senders[0]._id,
        pickupAddress: '111 Maple Ave',
        dropoffAddress: '221 Cedar St',
        biker: bikers[1]._id,
        status: 'pickedup',
        pickupTimestamp: new Date('2022-03-16T12:00:00Z')
    },
    {
        sender: senders[0]._id,
        pickupAddress: '112 Maple Ave',
        dropoffAddress: '222 Cedar St'
    },
    {
        sender: senders[0]._id,
        pickupAddress: '113 Maple Ave',
        dropoffAddress: '223 Cedar St'
    },
    {
        sender: senders[1]._id,
        pickupAddress: '123 Main St',
        dropoffAddress: '456 Elm St',
        biker: bikers[1]._id,
        status: 'pickedup',
        pickupTimestamp: new Date('2022-03-16T12:00:00Z')
    },
    {
        sender: senders[1]._id,
        pickupAddress: '789 Oak St',
        dropoffAddress: '1010 Pine St',
        biker: bikers[2]._id,
        status: 'pickedup',
        pickupTimestamp: new Date('2022-03-16T12:00:00Z')
    },
    {
        sender: senders[1]._id,
        pickupAddress: '111 Maple Ave',
        dropoffAddress: '221 Cedar St',
        biker: bikers[2]._id,
        status: 'delivered',
        pickupTimestamp: new Date('2022-03-15T12:00:00Z'),
        deliveryTimestamp: new Date('2022-03-16T12:00:00Z')
    },
    {
        sender: senders[1]._id,
        pickupAddress: '112 Maple Ave',
        dropoffAddress: '222 Cedar St'
    },
    {
        sender: senders[1]._id,
        pickupAddress: '113 Maple Ave',
        dropoffAddress: '223 Cedar St'
    },
    {
        sender: senders[2]._id,
        pickupAddress: '123 Main St',
        dropoffAddress: '456 Elm St',
        biker: bikers[0]._id,
        status: 'pickedup',
        pickupTimestamp: new Date('2022-03-16T12:00:00Z')
    },
    {
        sender: senders[2]._id,
        pickupAddress: '789 Oak St',
        dropoffAddress: '1010 Pine St',
        biker: bikers[4]._id,
        status: 'pickedup',
        pickupTimestamp: new Date('2022-03-16T12:00:00Z')
    },
    {
        sender: senders[2]._id,
        pickupAddress: '111 Maple Ave',
        dropoffAddress: '221 Cedar St',
        biker: bikers[5]._id,
        status: 'delivered',
        pickupTimestamp: new Date('2022-03-15T12:00:00Z'),
        deliveryTimestamp: new Date('2022-03-16T12:00:00Z')
    },
    {
        sender: senders[2]._id,
        pickupAddress: '112 Maple Ave',
        dropoffAddress: '222 Cedar St'
    },
    {
        sender: senders[2]._id,
        pickupAddress: '113 Maple Ave',
        dropoffAddress: '223 Cedar St'
    },
    {
        sender: senders[3]._id,
        pickupAddress: '123 Main St',
        dropoffAddress: '456 Elm St',
        biker: bikers[0]._id,
        status: 'pickedup',
        pickupTimestamp: new Date('2022-03-16T12:00:00Z')
    },
    {
        sender: senders[3]._id,
        pickupAddress: '789 Oak St',
        dropoffAddress: '1010 Pine St',
        biker: bikers[0]._id,
        status: 'pickedup',
        pickupTimestamp: new Date('2022-03-16T12:00:00Z')
    },
    {
        sender: senders[3]._id,
        pickupAddress: '111 Maple Ave',
        dropoffAddress: '221 Cedar St',
        biker: bikers[9]._id,
        status: 'pickedup',
        pickupTimestamp: new Date('2022-03-16T12:00:00Z')
    },
    {
        sender: senders[3]._id,
        pickupAddress: '112 Maple Ave',
        dropoffAddress: '222 Cedar St'
    },
    {
        sender: senders[3]._id,
        pickupAddress: '113 Maple Ave',
        dropoffAddress: '223 Cedar St'
    },
    {
        sender: senders[4]._id,
        pickupAddress: '123 Main St',
        dropoffAddress: '456 Elm St',
        biker: bikers[9]._id,
        status: 'pickedup',
        pickupTimestamp: new Date('2022-03-16T12:00:00Z')
    },
    {
        sender: senders[4]._id,
        pickupAddress: '789 Oak St',
        dropoffAddress: '1010 Pine St',
        biker: bikers[4]._id,
        status: 'pickedup',
        pickupTimestamp: new Date('2022-03-16T12:00:00Z')
    },
    {
        sender: senders[4]._id,
        pickupAddress: '111 Maple Ave',
        dropoffAddress: '221 Cedar St',
        biker: bikers[8]._id,
        status: 'pickedup',
        pickupTimestamp: new Date('2022-03-16T12:00:00Z')
    },
    {
        sender: senders[4]._id,
        pickupAddress: '112 Maple Ave',
        dropoffAddress: '222 Cedar St'
    },
    {
        sender: senders[4]._id,
        pickupAddress: '113 Maple Ave',
        dropoffAddress: '223 Cedar St'
    },

];


module.exports =
{
    senders,
    parcels,
    bikers
}

