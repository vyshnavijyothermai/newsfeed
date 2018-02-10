class RegController{
    constructor()
    {
       this.name="";
       this.email="";    
       this.password="";
       this.cpassword="";
    }
doReg()
    {
      console.log(this.name);
      console.log(this.email);
      console.log(this.password);
      console.log(this.cpassword);
    }
}
export default RegController;