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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SwaggerJsClient) {
      root.SwaggerJsClient = {};
    }
    root.SwaggerJsClient.FileUploadOptions = factory(root.SwaggerJsClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The FileUploadOptions model module.
   * @module model/libraryDocuments/FileUploadOptions
   * @version 6.0.0
   */

  /**
   * Constructs a new <code>FileUploadOptions</code>.
   * @alias module:model/libraryDocuments/FileUploadOptions
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>FileUploadOptions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/libraryDocuments/FileUploadOptions} obj Optional instance to populate.
   * @return {module:model/libraryDocuments/FileUploadOptions} The populated <code>FileUploadOptions</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('libraryDocument')) {
        obj['libraryDocument'] = ApiClient.convertToType(data['libraryDocument'], 'Boolean');
      }
      if (data.hasOwnProperty('localFile')) {
        obj['localFile'] = ApiClient.convertToType(data['localFile'], 'Boolean');
      }
      if (data.hasOwnProperty('webConnectors')) {
        obj['webConnectors'] = ApiClient.convertToType(data['webConnectors'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Whether library documents link should appear or not. Default value is taken as true
   * @member {Boolean} libraryDocument
   */
  exports.prototype['libraryDocument'] = undefined;
  /**
   * Whether local file upload button should appear or not. Default value is taken as true
   * @member {Boolean} localFile
   */
  exports.prototype['localFile'] = undefined;
  /**
   * Whether link to attach documents from web sources like Dropbox should appear or not. Default value is taken as true
   * @member {Boolean} webConnectors
   */
  exports.prototype['webConnectors'] = undefined;



  return exports;
}));


