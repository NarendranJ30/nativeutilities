// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
import "mx-global";
import { Big } from "big.js";

// BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * @param {string} length - it returns the Length of the string
 * @returns {Promise.<string>}
 */
export async function JS_RandomSecureString(length) {
	// BEGIN USER CODE
    let result           = '';
   const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   const charactersLength = length;
   for ( let i = 0; i < charactersLength; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }

   const encodedResult = encodeURI(result)

return encodedResult
	// END USER CODE
}
