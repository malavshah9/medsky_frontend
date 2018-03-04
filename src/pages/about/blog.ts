export class blog
{
    constructor(public blog_id:number,public blog_title:string,public blog_desc:string,public fk_doc_email_id:string,public blog_date:string,public fk_spec_id:string,public like_id:number,public fk_blog_id:number,public fk_usr_id:string,public likes:number)
    {
        
    }
}