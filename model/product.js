
const fs=require("fs")
const path=require("path")


module.exports=class Product{
    constructor(title){
        this.title=title
    }
    save(){
        const p=path.join(path.dirname(process.mainModule.filename),"data","product.json");
        fs.readFile(p,(err,data)=>{
            let product=[];
            if(!err){
                product=JSON.parse(data)
            }product.push(this);
            fs.writeFile(p,JSON.stringify(product),(err)=>{
                console.log(err)
            })
        })
        
    }
    static fetchAll(callBack){
        const p=path.join(path.dirname(process.mainModule.filename),"data","product.json");
        fs.readFile(p,(err,data)=>{
            if(err){
                callBack([]) 
            }
            callBack(JSON.parse(data)) 
        })
      
    }
}