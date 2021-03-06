async function seedProducts() {
    const { User } = await require('../../models');
    const users = await User.find({});
    
    const seedArray = await [
        {
            rating: 4, 
            title: "Good Review", 
            content: "This seller was honest and good to buy from.", 
            reviewedSellerUser: users[0]._id, 
            reviewingBuyerUser: users[5]._id, 
        }, 
        {
            rating: 3, 
            title: "ehhhhhh", 
            content: "Its doing the job so i wont complain but complaints could be made.", 
            reviewedSellerUser: users[4]._id, 
            reviewingBuyerUser: users[6]._id, 
        }, 
        {
            rating: 5, 
            title: "Highly Recommended", 
            content: "Transaction was smooth and the product works amazingly", 
            reviewedSellerUser: users[3]._id, 
            reviewingBuyerUser: users[2]._id, 
        }, 
        {
            rating: 4, 
            title: "Lifesaver", 
            content: "Will definitely buy from them again.", 
            reviewedSellerUser: users[7]._id, 
            reviewingBuyerUser: users[1]._id, 
        }, 
        {
            rating: 1, 
            title: "Why even sell this", 
            content: "Product was completely useless", 
            reviewedSellerUser: users[8]._id, 
            reviewingBuyerUser: users[0]._id, 
        }, 
        {
            rating: 5, 
            title: "Mind Blown", 
            content: "OMG I was scared these wouldnt fit but they fit perfectly.", 
            reviewedSellerUser: users[9]._id, 
            reviewingBuyerUser: users[7]._id, 
        }, 
        {
            rating: 3, 
            title: "SO-SO", 
            content: "I was expecting more but it is as advertised so i cant complain", 
            reviewedSellerUser: users[6]._id, 
            reviewingBuyerUser: users[4]._id, 
        }, 
        {
            rating: 5, 
            title: "PERFECT", 
            content: "Absoulutely love it I'll 100% stand buy this seller they hit the nail on the head", 
            reviewedSellerUser: users[5]._id, 
            reviewingBuyerUser: users[3]._id, 
        }, 
        {
            rating: 4, 
            title: "I would do it again", 
            content: "A little banged up but exactly what I needed.", 
            reviewedSellerUser: users[1]._id, 
            reviewingBuyerUser: users[8]._id, 
        }, 
        {
            rating: 1, 
            title: "ARE U SERIOUS", 
            content: "This product is a fraud completely not as described.", 
            reviewedSellerUser: users[2]._id, 
            reviewingBuyerUser: users[9]._id, 
        }, 
        {
            rating: 4, 
            title: "Ecstatic", 
            content: "I know you see this fit on me.", 
            reviewedSellerUser: users[0]._id, 
            reviewingBuyerUser: users[4]._id, 
        }, 
    ];
    return seedArray;
};

module.exports = seedProducts();
