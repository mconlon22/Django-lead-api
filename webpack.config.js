module.exports={
    module:{
        rules :[
            {
                test:/\.js$/,
                exclude:/node_mopdules/,
                use:{
                    loader:"babel-loader"
                }
            }
        ]
    }
}