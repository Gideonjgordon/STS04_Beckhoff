var TcHmi;!function(TcHmi){!function(Functions){!function(Beckhoff){Beckhoff.ForceLogoutEx=function(ctx,username){if(!ctx)throw new TypeError("Parameter 'ctx' must be defined.");if(!ctx.success||!ctx.error)throw new TypeError("Parameter 'ctx' must be defined properly. Either 'success' or 'error' or both are missing.");if("function"!=typeof ctx.success||"function"!=typeof ctx.error)throw new TypeError("Parameter 'ctx' must be defined properly. Either 'success' or 'error' or both are not of type 'function'.");return TcHmi.Server.forceLogout(username,(data=>{if(data.error!==TcHmi.Errors.NONE)return TCHMI_CONSOLE_LOG_LEVEL>=1&&TcHmi.Log.error("[Source=Function, Module=TcHmi.Functions.Beckhoff.ForceLogoutEx] "+TcHmi.Log.buildMessage(data.details)),void ctx.error(data.error,{code:data.error,message:TcHmi.Errors[data.error],reason:"Function: TcHmi.Functions.Beckhoff.LoginEx",domain:"Function",errors:data.details?[data.details]:void 0});ctx.success()}))}}(Functions.Beckhoff||(Functions.Beckhoff={}))}(TcHmi.Functions||(TcHmi.Functions={}))}(TcHmi||(TcHmi={})),TcHmi.Functions.registerFunctionEx("ForceLogoutEx","TcHmi.Functions.Beckhoff",TcHmi.Functions.Beckhoff.ForceLogoutEx);