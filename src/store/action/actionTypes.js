

export const HOME_LOGIN_PAGE = "HOME_LOGIN_PAGE";
export const HOME_LOGIN_PAGE_SUCCESS = "HOME_LOGIN_PAGE_SUCCESS"
export const HOME_LOGIN_PAGE_FAIL = "HOME_LOGIN_PAGE_FAIL"

export const HOME_REGISTER_PAGE = "HOME_REGISTER_PAGE"
export const HOME_REGISTER_PAGE_SUCCESS = "HOME_REGISTER_PAGE_SUCCESS"
export const HOME_REGISTER_PAGE_FAIL = "HOME_REGISTER_PAGE_FAIL"

export const HOME_LOGIN_FLAG = "HOME_LOGIN_FLAG";
export const HOME_REGISTER_FLAG = "HOME_REGISTER_FLAG"

export const RESET_STATUS_FLAG = "RESET_STATUS_FLAG";

export const CHECK_USER_LOGIN_STATUS = "CHECK_USER_LOGIN_STATUS";
export const CHECK_USER_LOGIN_STATUS_SUCCESS = "CHECK_USER_LOGIN_STATUS_SUCCESS";
export const CHECK_USER_LOGIN_STATUS_FAIL = "CHECK_USER_LOGIN_STATUS_FAIL";

export const  LOGGIN_OUT_API = "LOGGIN_OUT_API"
export const  LOGGIN_OUT_API_SUCCESS = "LOGGIN_OUT_API_SUCCESS"
export const  LOGGIN_OUT_API_FAIL = "LOGGIN_OUT_API_FAIL"

export const FORGOT_PASSWORD_SEND_LINK = "FORGOT_PASSWORD_SEND_LINK";
export const FORGOT_PASSWORD_SEND_LINK_SUCCESS = "FORGOT_PASSWORD_SEND_LINK_SUCCESS";
export const FORGOT_PASSWORD_SEND_LINK_FAIL = "FORGOT_PASSWORD_SEND_LINK_FAIL"

export const CHANGE_USER_PASSWORD = "CHANGE_USER_PASSWORD";
export const CHANGE_USER_PASSWORD_SUCCESS = "CHANGE_USER_PASSWORD_SUCCESS";
export const CHANGE_USER_PASSWORD_FAIL = "CHANGE_USER_PASSWORD_FAIL";

/**LOADER */
export const DISPLAY_LOADER = "DISPLAY_LOADER"
export const HIDE_LODER = "HIDE_LODER"
export const FECTH_AUTH_STATUS = "FECTH_AUTH_STATUS"
/**mapping loader */
export const DISPLAY_MAPPING_LOADER = "DISPLAY_MAPPING_LOADER"
export const HIDE_MAPPING_LOADER = "HIDE_MAPPING_LOADER"
/**mapping loader */
export const DISPLAY_PAYMENT_LOADER = "DISPLAY_PAYMENT_LOADER"
export const HIDE_PAYMENT_LOADER = "HIDE_PAYMENT_LOADER"

/**
 * Creating action type for fetching solution list
 */


export const FETCH_ALL_SOLUTION = "FETCH_ALL_SOLUTION"
export const FETCH_ALL_SOLUTION_SUCCESS = "FETCH_ALL_SOLUTION_SUCCESS"
export const FETCH_ALL_SOLUTION_FAIL = "FETCH_ALL_SOLUTION_FAIL"

/**
 * Creating action type for fetching solution List updated API 
 */

 export const GET_ALL_SOLUTION = "GET_ALL_SOLUTION"
 export const GET_ALL_SOLUTION_SUCCESS = "GET_ALL_SOLUTION_SUCCESS"
 export const GET_ALL_SOLUTION_FAIL = "GET_ALL_SOLUTION_FAIL"



/**
 * Creating action type for fetching solution instances
 */


export const FETCH_SOLUTION_INSTANCES = "FETCH_SOLUTION_INSTANCES" 
export const FETCH_SOLUTION_INSTANCES_SUCCESS = "FETCH_SOLUTION_INSTANCES_SUCCESS" 
export const FETCH_SOLUTION_INSTANCES_FAIL = "FETCH_SOLUTION_INSTANCES_FAIL" 


export const DELETE_SOLUTION_INSTANCES = "DELETE_SOLUTION_INSTANCES" 
export const DELETE_SOLUTION_INSTANCES_SUCCESS = "DELETE_SOLUTION_INSTANCES_SUCCESS" 
export const DELETE_SOLUTION_INSTANCES_FAIL = "DELETE_SOLUTION_INSTANCES_FAIL";
export const RESET_SOLUTION_STATUS = "RESET_SOLUTION_STATUS";

export const CHANGE_STATUS_SOLUTION_INSTANCES = "CHANGE_STATUS_SOLUTION_INSTANCES" 
export const CHANGE_STATUS_SOLUTION_INSTANCES_SUCCESS = "CHANGE_STATUS_SOLUTION_INSTANCES_SUCCESS" 
export const CHANGE_STATUS_SOLUTION_INSTANCES_FAIL = "CHANGE_STATUS_SOLUTION_INSTANCES_FAIL";

export const CONFIGE_INSTANCE_SOLUTION  = "CONFIGE_INSTANCE_SOLUTION"
export const CONFIGE_INSTANCE_SOLUTION_SUCCESS  = "CONFIGE_INSTANCE_SOLUTION_SUCCESS" 
export const CONFIGE_INSTANCE_SOLUTION_FAIL  = "CONFIGE_INSTANCE_SOLUTION_FAIL" 

//for selectObject

export const SAVE_SELECTEDOJECT = "SAVE_SELECTEDOJECT"

export const SET_INITLA_STATE_FOR_SOLUTION = "SET_INITLA_STATE_FOR_SOLUTION"

//for selcted tabs

export const SET_SELECTED_TAB_VALUE = "SET_SELECTED_TAB_VALUE"

// for fetching the info value 

export const INFO_POPUP_STATUS = 'INFO_POPUP_STATUS'

//end

//new migration progress bar

export const NEW_MIGRATION_PROGRESS_BAR = "NEW_MIGRATION_PROGRESS_BAR"

// Fetch From CRM list API 

export const FETCH_FROM_CRM_LIST = "FETCH_FROM_CRM_LIST"
export const FETCH_FROM_CRM_LIST_SUCCESS = "FETCH_FROM_CRM_LIST_SUCCESS"
export const FETCH_FROM_CRM_LIST_FAIL = "FETCH_FROM_CRM_LIST_FAIL"

// Fetch To CRM list API 

export const FETCH_TO_CRM_LIST = "FETCH_TO_CRM_LIST"
export const FETCH_TO_CRM_LIST_SUCCESS = "FETCH_TO_CRM_LIST_SUCCESS"
export const FETCH_TO_CRM_LIST_FAIL = "FETCH_TO_CRM_LIST_FAIL"

/**
 * Creating action type for fetching CRM solution list
 */

 export const FETCH_CRM_SOLUTION_LIST = "FETCH_CRM_SOLUTION_LIST"
 export const FETCH_CRM_SOLUTION_LIST_SUCCESS = "FETCH_CRM_SOLUTION_LIST_SUCCESS"
 export const FETCH_CRM_SOLUTION_LIST_FAIL = "FETCH_CRM_SOLUTION_LIST_FAIL"
 export const RESET_SELECTED_CRM_OBJECT = "RESET_SELECTED_CRM_OBJECT";


/**
 * Creating action type for configuration instance
 */

 export const SET_CONFIG_INSTANCE = "SET_CONFIG_INSTANCE";



/**
 * managing tabs in New migration screen
 */

 export const SET_TABS_VALUE = "SET_TABS_VALUE";


/**
 * Edit solution instance  - salesForce USER list
 */

 export const FETCH_SALESFORCE_USER_LIST = "FETCH_SALESFORCE_USER_LIST"
 export const FETCH_SALESFORCE_USER_LIST_SUCCESS = "FETCH_SALESFORCE_USER_LIST_SUCCESS"
 export const FETCH_SALESFORCE_USER_LIST_FAIL = "FETCH_SALESFORCE_USER_LIST_FAIL"
 

/**
 * Edit solution instance  - hubspot USER list
 */

 export const FETCH_HUBSPOT_USER_LIST = "FETCH_HUBSPOT_USER_LIST"
 export const FETCH_HUBSPOT_USER_LIST_SUCCESS = "FETCH_HUBSPOT_USER_LIST_SUCCESS"
 export const FETCH_HUBSPOT_USER_LIST_FAIL = "FETCH_HUBSPOT_USER_LIST_FAIL"

 /**
 * Edit solution instance  - Refresh user list (hubspot and salesforce)
 */

  export const RESET_SF_HF_USER_LIST = "RESET_SF_HF_USER_LIST"

  /**
 * Edit solution instance  - sending map data to the API for storing
 */

 export const MATCH_USER_DATA = "MATCH_USER_DATA"
 export const MATCH_USER_DATA_SUCCESS = "MATCH_USER_DATA_SUCCESS"
 export const MATCH_USER_DATA_FAIL = "MATCH_USER_DATA_FAIL"


  /**
 * Edit solution instance  - Refresh match user data
 */

   export const REFRESH_MATCH_USER_DATA = "REFRESH_MATCH_USER_DATA"
   export const REFRESH_MATCH_USER_DATA_SUCCESS = "REFRESH_MATCH_USER_DATA_SUCCESS"
   export const REFRESH_MATCH_USER_DATA_FAIL = "REFRESH_MATCH_USER_DATA_FAIL"





  /**
 * Edit solution instance  - set active step
 */

export const EDIT_ISTANCE_SET_ACTIVE_STEP = "EDIT_ISTANCE_SET_ACTIVE_STEP"

  /**
 * Edit solution instance  - save match user data in redux
 */

   export const SAVE_MATCH_USER_DATA = "SAVE_MATCH_USER_DATA"

  /**
 * Edit solution instance  - store matched USERS data to redux
 */

   export const STORE_MATCHED_USERS_DATA = "STORE_MATCHED_USERS_DATA"

/**
 * Edit solution instance  - set Tabs Valuefor map fields screen
 */

   export const SET_MAP_FIELDS_SELECTED_TABS = "SET_MAP_FIELDS_SELECTED_TABS"


/**
 * Edit solution instance  - Map fields mapping for company tab
 * 
 */

 export const FETCH_MAP_COMPANY_DATA = "FETCH_MAP_COMPANY_DATA"
 export const FETCH_MAP_COMPANY_DATA_SUCCESS = "FETCH_MAP_COMPANY_DATA_SUCCESS"
 export const FETCH_MAP_COMPANY_DATA_FAIL = "FETCH_MAP_COMPANY_DATA_FAIL"


 
  /**
 * Edit solution instance  - sending mapped data to the API for storing
 */

  export const MAPPED_COMPANY_DATA = "MAPPED_COMPANY_DATA"
  export const MAPPED_COMPANY_DATA_SUCCESS = "MAPPED_COMPANY_DATA_SUCCESS"
  export const MAPPED_COMPANY_DATA_FAIL = "MAPPED_COMPANY_DATA_FAIL"


  /**
 * Edit solution instance  - save mapped company data in redux
 */

   export const SAVE_MAPPED_COMPANY_DATA = "SAVE_MAPPED_COMPANY_DATA"

 
/**
 * Edit solution instance  - Map fields mapping for company tab for refreshing 
 * 
 */

 export const REFRESH_MAP_COMPANY_DATA = "REFRESH_MAP_COMPANY_DATA"
 export const REFRESH_MAP_COMPANY_DATA_SUCCESS = "REFRESH_MAP_COMPANY_DATA_SUCCESS"
 export const REFRESH_MAP_COMPANY_DATA_FAIL = "REFRESH_MAP_COMPANY_DATA_FAIL"   
  

/**
 * Edit solution instance  - fetching Map fields mapping for contact tab
 * 
 */

 export const FETCH_MAP_CONTACT_DATA = "FETCH_MAP_CONTACT_DATA"
 export const FETCH_MAP_CONTACT_DATA_SUCCESS = "FETCH_MAP_CONTACT_DATA_SUCCESS"
 export const FETCH_MAP_CONTACT_DATA_FAIL = "FETCH_MAP_CONTACT_DATA_FAIL" 


  /**
 * Edit solution instance  - sending mapped contact data to the API for storing
 */

   export const MAPPED_CONTACT_DATA = "MAPPED_CONTACT_DATA"
   export const MAPPED_CONTACT_DATA_SUCCESS = "MAPPED_CONTACT_DATA_SUCCESS"
   export const MAPPED_CONTACT_DATA_FAIL = "MAPPED_CONTACT_DATA_FAIL"


/**
 * Edit solution instance  - Map fields mapping for contact tab for refreshing 
 * 
 */

 export const REFRESH_MAP_CONTACT_DATA = "REFRESH_MAP_CONTACT_DATA"
 export const REFRESH_MAP_CONTACT_DATA_SUCCESS = "REFRESH_MAP_CONTACT_DATA_SUCCESS"
 export const REFRESH_MAP_CONTACT_DATA_FAIL = "REFRESH_MAP_CONTACT_DATA_FAIL"


 
/**
 * Edit solution instance  - fetching Map fields mapping for Deals data tab
 * 
 */

 export const FETCH_MAP_DEALS_DATA = "FETCH_MAP_DEALS_DATA"
 export const FETCH_MAP_DEALS_DATA_SUCCESS = "FETCH_MAP_DEALS_DATA_SUCCESS"
 export const FETCH_MAP_DEALS_DATA_FAIL = "FETCH_MAP_DEALS_DATA_FAIL" 


   /**
 * Edit solution instance  - sending mapped deals data to the API for storing
 */

    export const MAPPED_DEALS_DATA = "MAPPED_DEALS_DATA"
    export const MAPPED_DEALS_DATA_SUCCESS = "MAPPED_DEALS_DATA_SUCCESS"
    export const MAPPED_DEALS_DATA_FAIL = "MAPPED_DEALS_DATA_FAIL"
 
 
 /**
  * Edit solution instance  - Map fields mapping for deals tab for refreshing 
  * 
  */
 
  export const REFRESH_MAP_DEALS_DATA = "REFRESH_MAP_DEALS_DATA"
  export const REFRESH_MAP_DEALS_DATA_SUCCESS = "REFRESH_MAP_DEALS_DATA_SUCCESS"
  export const REFRESH_MAP_DEALS_DATA_FAIL = "REFRESH_MAP_DEALS_DATA_FAIL"


   /**
  * Edit solution instance  - Upgrade instance  
  * 
  */
 
    export const UPGRADE_SOLUTION_INSTANCE = "UPGRADE_SOLUTION_INSTANCE"
    export const UPGRADE_SOLUTION_INSTANCE_SUCCESS = "UPGRADE_SOLUTION_INSTANCE_SUCCESS"
    export const UPGRADE_SOLUTION_INSTANCE_FAIL = "UPGRADE_SOLUTION_INSTANCE_FAIL"


     
/**
 * Edit solution instance  - fetching Map fields mapping for product list data tab
 * 
 */

 export const FETCH_MAP_PRODUCT_DATA = "FETCH_MAP_PRODUCT_DATA"
 export const FETCH_MAP_PRODUCT_DATA_SUCCESS = "FETCH_MAP_PRODUCT_DATA_SUCCESS"
 export const FETCH_MAP_PRODUCT_DATA_FAIL = "FETCH_MAP_PRODUCT_DATA_FAIL" 

 
   /**
 * Edit solution instance  - sending mapped product data to the API for storing
 */

    export const MAPPED_PRODUCT_DATA = "MAPPED_PRODUCT_DATA"
    export const MAPPED_PRODUCT_DATA_SUCCESS = "MAPPED_PRODUCT_DATA_SUCCESS"
    export const MAPPED_PRODUCT_DATA_FAIL = "MAPPED_PRODUCT_DATA_FAIL"

 /**
  * Edit solution instance  - Map fields mapping for Product list tab for refreshing 
  * 
  */
 
  export const REFRESH_MAP_PRODUCT_DATA = "REFRESH_MAP_PRODUCT_DATA"
  export const REFRESH_MAP_PRODUCT_DATA_SUCCESS = "REFRESH_MAP_PRODUCT_DATA_SUCCESS"
  export const REFRESH_MAP_PRODUCT_DATA_FAIL = "REFRESH_MAP_PRODUCT_DATA_FAIL"



  /**
 * Edit solution instance  - fetching Map fields mapping for Ticket list data tab
 * 
 */

 export const FETCH_MAP_TICKET_DATA = "FETCH_MAP_TICKET_DATA"
 export const FETCH_MAP_TICKET_DATA_SUCCESS = "FETCH_MAP_TICKET_DATA_SUCCESS"
 export const FETCH_MAP_TICKET_DATA_FAIL = "FETCH_MAP_TICKET_DATA_FAIL" 


   /**
 * Edit solution instance  - sending mapped Ticket data to the API for storing
 */

    export const MAPPED_TICKET_DATA = "MAPPED_TICKET_DATA"
    export const MAPPED_TICKET_DATA_SUCCESS = "MAPPED_TICKET_DATA_SUCCESS"
    export const MAPPED_TICKET_DATA_FAIL = "MAPPED_TICKET_DATA_FAIL"

 /**
  * Edit solution instance  - Map fields mapping for ticket list tab for refreshing 
  * 
  */
 
  export const REFRESH_MAP_TICKET_DATA = "REFRESH_MAP_TICKET_DATA"
  export const REFRESH_MAP_TICKET_DATA_SUCCESS = "REFRESH_MAP_TICKET_DATA_SUCCESS"
  export const REFRESH_MAP_TICKET_DATA_FAIL = "REFRESH_MAP_TICKET_DATA_FAIL"


  
  /**
 * Edit solution instance  - fetching Map fields mapping for Emails list data tab
 * 
 */

 export const FETCH_MAP_EMAIL_DATA = "FETCH_MAP_EMAIL_DATA"
 export const FETCH_MAP_EMAIL_DATA_SUCCESS = "FETCH_MAP_EMAIL_DATA_SUCCESS"
 export const FETCH_MAP_EMAIL_DATA_FAIL = "FETCH_MAP_EMAIL_DATA_FAIL" 


   /**
 * Edit solution instance  - sending mapped Emails data to the API for storing
 */

    export const MAPPED_EMAIL_DATA = "MAPPED_EMAIL_DATA"
    export const MAPPED_EMAIL_DATA_SUCCESS = "MAPPED_EMAIL_DATA_SUCCESS"
    export const MAPPED_EMAIL_DATA_FAIL = "MAPPED_EMAIL_DATA_FAIL"

 /**
  * Edit solution instance  - Map fields mapping for Emails list tab for refreshing 
  * 
  */
 
  export const REFRESH_MAP_EMAIL_DATA = "REFRESH_MAP_EMAIL_DATA"
  export const REFRESH_MAP_EMAIL_DATA_SUCCESS = "REFRESH_MAP_EMAIL_DATA_SUCCESS"
  export const REFRESH_MAP_EMAIL_DATA_FAIL = "REFRESH_MAP_EMAIL_DATA_FAIL"


    
  /**
 * Edit solution instance  - fetching Map fields mapping for Meetings list data tab
 * 
 */

 export const FETCH_MAP_MEETING_DATA = "FETCH_MAP_MEETING_DATA"
 export const FETCH_MAP_MEETING_DATA_SUCCESS = "FETCH_MAP_MEETING_DATA_SUCCESS"
 export const FETCH_MAP_MEETING_DATA_FAIL = "FETCH_MAP_MEETING_DATA_FAIL" 


   /**
 * Edit solution instance  - sending mapped Meetings data to the API for storing
 */

    export const MAPPED_MEETING_DATA = "MAPPED_MEETING_DATA"
    export const MAPPED_MEETING_DATA_SUCCESS = "MAPPED_MEETING_DATA_SUCCESS"
    export const MAPPED_MEETING_DATA_FAIL = "MAPPED_MEETING_DATA_FAIL"


 /**
  * Edit solution instance  - Map fields mapping for Meetings list tab for refreshing 
  * 
  */
 
  export const REFRESH_MAP_MEETING_DATA = "REFRESH_MAP_MEETING_DATA"
  export const REFRESH_MAP_MEETING_DATA_SUCCESS = "REFRESH_MAP_MEETING_DATA_SUCCESS"
  export const REFRESH_MAP_MEETING_DATA_FAIL = "REFRESH_MAP_MEETING_DATA_FAIL"


  /**
 * Edit solution instance  - fetching Map fields mapping for leads list data tab
 * 
 */

   export const FETCH_MAP_LEADS_DATA = "FETCH_MAP_LEADS_DATA"
   export const FETCH_MAP_LEADS_DATA_SUCCESS = "FETCH_MAP_LEADS_DATA_SUCCESS"
   export const FETCH_MAP_LEADS_DATA_FAIL = "FETCH_MAP_LEADS_DATA_FAIL" 
  
  
     /**
   * Edit solution instance  - sending mapped leads data to the API for storing
   */
  
      export const MAPPED_LEADS_DATA = "MAPPED_LEADS_DATA"
      export const MAPPED_LEADS_DATA_SUCCESS = "MAPPED_LEADS_DATA_SUCCESS"
      export const MAPPED_LEADS_DATA_FAIL = "MAPPED_LEADS_DATA_FAIL"
  
  
   /**
    * Edit solution instance  - Map fields mapping for leads list tab for refreshing 
    * 
    */
   
    export const REFRESH_MAP_LEADS_DATA = "REFRESH_MAP_LEADS_DATA"
    export const REFRESH_MAP_LEADS_DATA_SUCCESS = "REFRESH_MAP_LEADS_DATA_SUCCESS"
    export const REFRESH_MAP_LEADS_DATA_FAIL = "REFRESH_MAP_LEADS_DATA_FAIL"



  /**
 * Edit solution instance  - fetching Map fields mapping for Notes list data tab
 * 
 */

   export const FETCH_MAP_NOTES_DATA = "FETCH_MAP_NOTES_DATA"
   export const FETCH_MAP_NOTES_DATA_SUCCESS = "FETCH_MAP_NOTES_DATA_SUCCESS"
   export const FETCH_MAP_NOTES_DATA_FAIL = "FETCH_MAP_NOTES_DATA_FAIL" 
  
  
     /**
   * Edit solution instance  - sending mapped nOTES data to the API for storing
   */
  
      export const MAPPED_NOTES_DATA = "MAPPED_NOTES_DATA"
      export const MAPPED_NOTES_DATA_SUCCESS = "MAPPED_NOTES_DATA_SUCCESS"
      export const MAPPED_NOTES_DATA_FAIL = "MAPPED_NOTES_DATA_FAIL"
  
  
   /**
    * Edit solution instance  - Map fields mapping for NOTES list tab for refreshing 
    * 
    */
   
    export const REFRESH_MAP_NOTES_DATA = "REFRESH_MAP_NOTES_DATA"
    export const REFRESH_MAP_NOTES_DATA_SUCCESS = "REFRESH_MAP_NOTES_DATA_SUCCESS"
    export const REFRESH_MAP_NOTES_DATA_FAIL = "REFRESH_MAP_NOTES_DATA_FAIL"



  /**
 * Edit solution instance  - fetching Map fields mapping for Attachment list data tab
 * 
 */

   export const FETCH_MAP_ATTACHMENTS_DATA = "FETCH_MAP_ATTACHMENTS_DATA"
   export const FETCH_MAP_ATTACHMENTS_DATA_SUCCESS = "FETCH_MAP_ATTACHMENTS_DATA_SUCCESS"
   export const FETCH_MAP_ATTACHMENTS_DATA_FAIL = "FETCH_MAP_ATTACHMENTS_DATA_FAIL" 
  
  
     /**
   * Edit solution instance  - sending mapped Attachment data to the API for storing
   */
  
      export const MAPPED_ATTACHMENTS_DATA = "MAPPED_ATTACHMENTS_DATA"
      export const MAPPED_ATTACHMENTS_DATA_SUCCESS = "MAPPED_ATTACHMENTS_DATA_SUCCESS"
      export const MAPPED_ATTACHMENTS_DATA_FAIL = "MAPPED_ATTACHMENTS_DATA_FAIL"
  
  
   /**
    * Edit solution instance  - Map fields mapping for Attachment list tab for refreshing 
    * 
    */
   
    export const REFRESH_MAP_ATTACHMENTS_DATA = "REFRESH_MAP_ATTACHMENTS_DATA"
    export const REFRESH_MAP_ATTACHMENTS_DATA_SUCCESS = "REFRESH_MAP_ATTACHMENTS_DATA_SUCCESS"
    export const REFRESH_MAP_ATTACHMENTS_DATA_FAIL = "REFRESH_MAP_ATTACHMENTS_DATA_FAIL"

   /**
    * Edit solution instance  - fetch tabs list
    * 
    */

    export const FETCH_MAP_FIELDS_TABS_LIST = "FETCH_MAP_FIELDS_TABS_LIST"
    export const FETCH_MAP_FIELDS_TABS_LIST_SUCCESS = "FETCH_MAP_FIELDS_TABS_LIST_SUCCESS"
    export const FETCH_MAP_FIELDS_TABS_LIST_FAIL = "FETCH_MAP_FIELDS_TABS_LIST_FAIL"



   /**
    * Edit solution instance  - Selected Object
    * 
    */

    export const FETCH_SELECTED_OBJECT_LIST = "FETCH_SELECTED_OBJECT_LIST"
    export const FETCH_SELECTED_OBJECT_LIST_SUCCESS = "FETCH_SELECTED_OBJECT_LIST_SUCCESS"
    export const FETCH_SELECTED_OBJECT_LIST_FAIL = "FETCH_SELECTED_OBJECT_LIST_FAIL"

     /**
   * Edit solution instance  - sending mapped Selected Object to the API for storing
   */
  
      export const MAPPED_SELECTED_OBJECT_DATA = "MAPPED_SELECTED_OBJECT_DATA"
      export const MAPPED_SELECTED_OBJECT_DATA_SUCCESS = "MAPPED_SELECTED_OBJECT_DATA_SUCCESS"
      export const MAPPED_SELECTED_OBJECT_DATA_FAIL = "MAPPED_SELECTED_OBJECT_DATA_FAIL"

    /**
 * Edit solution instance  - reset flag uused for moving to the next step in selected object data 
 */

     export const RESET_SELECTED_OBJECT_STATUS = "RESET_SELECTED_OBJECT_STATUS"

    /**
 * Edit solution instance  - save selected object data in redux
 */

     export const SAVE_SELECTED_OBJECT_DATA = "SAVE_SELECTED_OBJECT_DATA"


  /**
 * Edit solution instance  - fetching Map fields mapping for Engagements list data tab
 * 
 */

   export const FETCH_MAP_ENGAGE_DATA = "FETCH_MAP_ENGAGE_DATA"
   export const FETCH_MAP_ENGAGE_DATA_SUCCESS = "FETCH_MAP_ENGAGE_DATA_SUCCESS"
   export const FETCH_MAP_ENGAGE_DATA_FAIL = "FETCH_MAP_ENGAGE_DATA_FAIL" 
  
  
     /**
   * Edit solution instance  - sending mapped Engagements data to the API for storing
   */
  
      export const MAPPED_ENGAGE_DATA = "MAPPED_ENGAGE_DATA"
      export const MAPPED_ENGAGE_DATA_SUCCESS = "MAPPED_ENGAGE_DATA_SUCCESS"
      export const MAPPED_ENGAGE_DATA_FAIL = "MAPPED_ENGAGE_DATA_FAIL"
  
  
   /**
    * Edit solution instance  - Map fields mapping for Engagements list tab for refreshing 
    * 
    */
   
    export const REFRESH_MAP_ENGAGE_DATA = "REFRESH_MAP_ENGAGE_DATA"
    export const REFRESH_MAP_ENGAGE_DATA_SUCCESS = "REFRESH_MAP_ENGAGE_DATA_SUCCESS"
    export const REFRESH_MAP_ENGAGE_DATA_FAIL = "REFRESH_MAP_ENGAGE_DATA_FAIL"


   /**
    * Edit solution instance  - reset edit instance initial values 
    * 
    */
   
    export const RESET_EDIT_INSTANCE_INITIAL_VALUES = "RESET_EDIT_INSTANCE_INITIAL_VALUES"


    /**
    * Edit solution instance  - salesforce reset value 
    * 
    */
   
     export const SALESfORCE_RESET_STATUS = "SALESfORCE_RESET_STATUS"
   
  
   /**
    * Edit solution instance  - Demo migration 
    * 
    */
   
    export const DEMO_MIGRATION = "DEMO_MIGRATION"
    export const DEMO_MIGRATION_SUCCESS = "DEMO_MIGRATION_SUCCESS"
    export const DEMO_MIGRATION_FAIL = "DEMO_MIGRATION_FAIL"

    /**
    * Edit solution instance  - reset demo migration status
    * 
    */
   
     export const RESET_DEMO_MIGRATION_STATUS = "RESET_DEMO_MIGRATION_STATUS"

   /**
    * Edit solution instance  - get externalIds 
    * 
    */
   
    export const FETCH_EXTERNALIDS = "FETCH_EXTERNALIDS"
    export const FETCH_EXTERNALIDS_SUCCESS = "FETCH_EXTERNALIDS_SUCCESS"
    export const FETCH_EXTERNALIDS_FAIL = "FETCH_EXTERNALIDS_FAIL"

   /**
    * Edit solution instance  - migration report
    * 
    */
   
    export const MIGRATION_REPORT_DATA = "MIGRATION_REPORT_DATA"
    export const MIGRATION_REPORT_DATA_SUCCESS = "MIGRATION_REPORT_DATA_SUCCESS"
    export const MIGRATION_REPORT_DATA_FAIL = "MIGRATION_REPORT_DATA_FAIL"

   /**
    * Edit solution instance  - migration Details
    * 
    */
   
    export const MIGRATION_DETAILS_DATA = "MIGRATION_DETAILS_DATA"
    export const MIGRATION_DETAILS_DATA_SUCCESS = "MIGRATION_DETAILS_DATA_SUCCESS"
    export const MIGRATION_DETAILS_DATA_FAIL = "MIGRATION_DETAILS_DATA_FAIL"

   /**
    * Edit solution instance  - start  migration
    * 
    */
   
    export const START_MIGRATION = "START_MIGRATION"
    export const START_MIGRATION_SUCCESS = "START_MIGRATION_SUCCESS"
    export const START_MIGRATION_FAIL = "START_MIGRATION_FAIL"


    /**PAYMENT APIS */

    export const INITIATE_PAYMENT_CALL = "INITIATE_PAYMENT_CALL"
    export const INITIATE_PAYMENT_CALL_SUCCESS = "INITIATE_PAYMENT_CALL_SUCCESS"
    export const INITIATE_PAYMENT_CALL_FAIL = "INITIATE_PAYMENT_CALL_FAIL"

    export const RESET_PAYMENT_STATUS = "RESET_PAYMENT_STATUS"

    export const PAYMENT_PRICE_TABLE_DATA = "PAYMENT_PRICE_TABLE_DATA"
    export const PAYMENT_PRICE_TABLE_DATA_SUCCESS = "PAYMENT_PRICE_TABLE_DATA_SUCCESS"
    export const PAYMENT_PRICE_TABLE_DATA_FAIL = "PAYMENT_PRICE_TABLE_DATA_FAIL"

    export const RESET_PAYMENT_FLAGS = "RESET_PAYMENT_FLAGS"

    export const RESET_PAYMENT_FAIL_FLAGS = "RESET_PAYMENT_FAIL_FLAGS"

   /**
    * Edit solution instance Payment  - migration object list
    * 
    */
   
    export const MIGRATION_OBJECT_LIST = "MIGRATION_OBJECT_LIST"
    export const MIGRATION_OBJECT_LIST_SUCCESS = "MIGRATION_OBJECT_LIST_SUCCESS"
    export const MIGRATION_OBJECT_LIST_FAIL = "MIGRATION_OBJECT_LIST_FAIL"


   /**
    * Edit solution instance  - Remove Field - company 
    * 
    */
   
    export const REMOVE_COMPANY_MAPFIELDS_ROW = "REMOVE_COMPANY_MAPFIELDS_ROW"

       /**
    * Edit solution instance  - Remove Field - company - flag
    * 
    */
   
    export const REMOVE_COMPANY_MAPFIELDS_FLAG = "REMOVE_COMPANY_MAPFIELDS_FLAG"


   /**
    * Edit solution instance  - Remove Field - Contact 
    * 
    */
   
    export const REMOVE_CONTACT_MAPFIELDS_ROW = "REMOVE_CONTACT_MAPFIELDS_ROW"

       /**
    * Edit solution instance  - Remove Field - contact - flag
    * 
    */
   
    export const REMOVE_CONTACT_MAPFIELDS_FLAG = "REMOVE_CONTACT_MAPFIELDS_FLAG"

   /**
    * Edit solution instance  - Remove Field - deals 
    * 
    */
   
    export const REMOVE_DEALS_MAPFIELDS_ROW = "REMOVE_DEALS_MAPFIELDS_ROW"

    /**
    * Edit solution instance  - Remove Field - deals - flag
    * 
    */
   
    export const REMOVE_DEALS_MAPFIELDS_FLAG = "REMOVE_DEALS_MAPFIELDS_FLAG"

   /**
    * Edit solution instance  - Remove Field - engagement 
    * 
    */
   
    export const REMOVE_ENGAGEMENT_MAPFIELDS_ROW = "REMOVE_ENGAGEMENT_MAPFIELDS_ROW"

    /**
    * Edit solution instance  - Remove Field - engagement - flag
    * 
    */
   
    export const REMOVE_ENGAGEMENT_MAPFIELDS_FLAG = "REMOVE_ENGAGEMENT_MAPFIELDS_FLAG"

   /**
    * Edit solution instance  - Remove Field - ticket 
    * 
    */
   
    export const REMOVE_TICKET_MAPFIELDS_ROW = "REMOVE_TICKET_MAPFIELDS_ROW"

    /**
    * Edit solution instance  - Remove Field - ticket - flag
    * 
    */
   
    export const REMOVE_TICKET_MAPFIELDS_FLAG = "REMOVE_TICKET_MAPFIELDS_FLAG"




