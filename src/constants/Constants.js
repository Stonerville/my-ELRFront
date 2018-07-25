export const PAGELIMIT_LOCATION_LIST = '20'
export const PAGELIMIT_LOCATION_LIST_BYMER = '20'
 
// let serviceHostname = ""
// let lane = ""
// let uiHostname = window.location.hostname;
// let landingHostname = uiHostname.replace("apps-","");
// if (uiHostname.indexOf('local') >= 0){
//   serviceHostname = "das-dvnt.test.statefarm.com"
//   lane = "b"
//   landingHostname = "dvnt-b.test.statefarm.com"
// }
// else if (uiHostname.indexOf('dvnt-b') > 0){
//   serviceHostname = uiHostname.replace('apps-dvnt-b','das-dvnt')
//   lane = "b"
// }
// else if (uiHostname.indexOf('dvnt-a') > 0){
//   serviceHostname = uiHostname.replace('apps-dvnt-a','das-dvnt')
//   lane = "a"
// }
// else{
//   serviceHostname = uiHostname.replace('apps','das')
//   let hostnameLane = uiHostname.split('.test.')[0];
//   lane = hostnameLane.charAt(hostnameLane.length-1)
// }
// export const SERVICE_CONTEXT = "https://" + serviceHostname + "/boaMerchantPortal/api/v1"
//export const API_LANE = lane
export const API_KEY = "2a09a063-43d9-4458-bc1e-8d46f67d1fda"
export const THREE_CHAR_LENGTH_MSG = 'Enter more than 3 characters'
 
export const SERVICE_ROUTES = {
    UPLOAD_LOGO: "/logo",
    MPA_STATUS: "/mpaStatus",
}