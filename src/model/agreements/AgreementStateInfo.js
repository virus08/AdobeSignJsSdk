/**
*  Copyright 2019 Adobe Systems Incorporated. All rights reserved.
*  This file is licensed to you under the Apache License, Version 2.0 (the "License");
*  you may not use this file except in compliance with the License. You may obtain a copy
*  of the License at http://www.apache.org/licenses/LICENSE-2.0
*
*  Unless required by applicable law or agreed to in writing, software distributed under
*  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
*  OF ANY KIND, either express or implied. See the License for the specific language
*  governing permissions and limitations under the License.
*
*
**/


/**
 * 
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 6.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/agreements/AgreementCancellationInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AgreementCancellationInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.SwaggerJsClient) {
      root.SwaggerJsClient = {};
    }
    root.SwaggerJsClient.AgreementStateInfo = factory(root.SwaggerJsClient.ApiClient, root.SwaggerJsClient.AgreementCancellationInfo);
  }
}(this, function(ApiClient, AgreementCancellationInfo) {
  'use strict';




  /**
   * The AgreementStateInfo model module.
   * @module model/agreements/AgreementStateInfo
   * @version 6.0.0
   */

  /**
   * Constructs a new <code>AgreementStateInfo</code>.
   * @alias module:model/agreements/AgreementStateInfo
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>AgreementStateInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/agreements/AgreementStateInfo} obj Optional instance to populate.
   * @return {module:model/agreements/AgreementStateInfo} The populated <code>AgreementStateInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('agreementCancellationInfo')) {
        obj['agreementCancellationInfo'] = AgreementCancellationInfo.constructFromObject(data['agreementCancellationInfo']);
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
    }
    return obj;
  }

  /**
   * Cancellation information for the agreement
   * @member {module:model/agreements/AgreementCancellationInfo} agreementCancellationInfo
   */
  exports.prototype['agreementCancellationInfo'] = undefined;
  /**
   * The state in which the agreement should land
   * @member {module:model/agreements/AgreementStateInfo.StateEnum} state
   */
  exports.prototype['state'] = undefined;


  /**
   * Allowed values for the <code>state</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StateEnum = {
    /**
     * value: "AUTHORING"
     * @const
     */
    "AUTHORING": "AUTHORING",
    /**
     * value: "CANCELLED"
     * @const
     */
    "CANCELLED": "CANCELLED",
    /**
     * value: "IN_PROCESS"
     * @const
     */
    "IN_PROCESS": "IN_PROCESS"  };


  return exports;
}));


