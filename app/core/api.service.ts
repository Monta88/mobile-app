import { Injectable } from '@angular/core';
import { Http, RequestOptions, RequestOptionsArgs, Headers } from '@angular/http';

@Injectable()
export class Api {

    public action: any;

    constructor(private http: Http) {

    }

    public get(url: string, headers: Headers = null) {

        let options = new RequestOptions(<RequestOptionsArgs>{
            headers: headers
        });

        return this.http.get(url, options);
    }

    public post( url: string, headers: Headers = null ) {

        let options = new RequestOptions(<RequestOptionsArgs>{
            headers: headers
        });

        return this.http.post(url,  options, {"method": this.action});
    }

}
