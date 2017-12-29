export class doctordetails
{
    constructor(public doc_sr_no:Number,
        public pk_doc_email_id:String,
        public doc_pass:String,
        public doc_lic_no:Number,
        public doc_name:String,
        public fk_spec_id:Number,
        public fk_deg_id:Number,
        public doc_pro_pic:String,
        public doc_add:String,
        public doc_gen:String,
        public doc_mno:Number,
        public doc_verify:String,
        public doc_token:String,
        public pk_deg_id:Number,
        public deg_name:String,
        public pk_spec_id:Number,
        public spec_name:String){

    }
    
}