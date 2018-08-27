# API Document

This is the api document for *Map_Visualization* website.

We use `Express.js` for our backend framework and `mongodb` for database.

## Show MRT Route 
    Returns json array data about MRT route.

* **URL**

    */MRT*

* **Method**

    `GET`
  
* **URL Params**

    Required: `NO`
 

* **Response**

  * **Code:** `200` <br />
      
    **Content:** 
        
        [ {"station_name_en":"Taipei Zoo","line_code":"BR","lat":24.998197,"lon":121.579338,"num":1},... ]
 

* **Sample Call**

    ```javascript
    fetch('/MRT')
        .then(res => res.json())
        .then(web => {
            MRTData = web;
            this.setData();
        })
    ```
----

## Show Count number in every location
    Returns json data about count number in every location to display population moving on map.

* **URL**

    */count/:time*

* **Method**

    `GET`
  
* **URL Params**

    Required: `time=[string]`
 

* **Response**

  * **Code:** `200` <br />
      
    **Content:** 

        [ {"locationCount":[[25.069,121.478,66],[25.076,121.475,45],[25.132,121.468,160],..]} ]
 

* **Sample Call**

    ```javascript
    fetch('/count/'+time)
        .then(res => res.json())
        .then(web => {
            data = web[0].locationCount;
            // code block
        })
    ```
----

## Get North Taiwan districts list
    Returns json array data about North Taiwan districts list.

* **URL**

    */districtTW*

* **Method**

    `GET`
  
* **URL Params**

    Required: `NO`

* **Response**

  * **Code:** `200` <br />
  
    **Content:** 
        
        [ {"address":"臺北市中正區","lat":25.03240487,"lon":121.5198839,"num":1},... ]
 
* **Sample Call**

    ```javascript
    fetch('/districtTW')
        .then(res => res.json())
        .then(web => {
            districtData = web;
            // code block
        })
    ```
----

## Show Location in which district
    Returns json array data about the location allocated in which district.

* **URL**

    */district/:time*

* **Method**

    `GET`
  
* **URL Params**

    Required: `time=[string]`
 

* **Response**

  * **Code:** `200` <br />
      
    **Content:** 
        
        [ {"districtAllocate":[{"name":[25.093,121.734],"d_id":18},{"name":[25.093,121.733],"d_id":18},...]} ]
 

* **Sample Call**

    ```javascript
    fetch('/district/'+time)
        .then(res => res.json())
        .then(web => {
            data = web[0].districtAllocate;
            // code block
        })
    ```
----

## Show Person Route data in specific district
    Returns json array data about person route data in specific district.

* **URL**

    */person/:distrct/:date*

* **Method**

    `GET`
  
* **URL Params**

    Required: `distrct=[string] / date=[string]`
 

* **Response**

  * **Code:** `200` <br />
      
    **Content:** 
       
        [ {"info":[{"begin":"00:15:50","end":"00:20:43","lat":"25.042","lon":"121.507"},...]} ]
 

* **Sample Call**

    ```javascript
    fetch('/person/'+district+"/"+time)
        .then(res => res.json())
        .then(web => {
            routeData = web;
            // code block
        })
    ```
----

## Show specific Person Route data in specific district
    Returns json array data about specific person route data in specific district.

* **URL**

    */person/:distrct/:name/:date*

* **Method**

    `GET`
  
* **URL Params**

    Required: `distrct=[string] / name=[string] / date=[string]`
 

* **Response**

  * **Code:** `200` <br />
      
    **Content:** 
       
        [ {"info":[{"begin":"00:15:50","end":"00:20:43","lat":"25.042","lon":"121.507"},...]} ]
 

* **Sample Call**

    ```javascript
     fetch('/person/'+district+"/"+id+"/"+time)
        .then(res => res.json())
        .then(web => {
            routeData = web;
            // code block
        })
    ```
