
class GetPosition {
    private _options: PositionOptions;
    private position: GeolocationCoordinates;
    private DEBUG: boolean;

    constructor(){

        this.DEBUG = (process.env.REACT_APP_DEBUG === "true") || false;

        this._options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        }
        const __DEFAULT_POSITION = {
            altitudeAccuracy: null,
            altitude: null,
            heading: null,
            accuracy: 0,
            latitude: 0,
            longitude: 0,
            speed: null,
        }
        this.position = (__DEFAULT_POSITION)
    }

   private _sucess(position: GeolocationPosition, sucess?:(e:any) => void) {
       const crd = position.coords;
       this.position = crd;
       const e = this;

       if(sucess)
            sucess(crd);

       if (!e.DEBUG)
            return; 
       
        console.log('Sua posição atual é:');
        console.log('Latitude : ' + crd.latitude);
        console.log('Longitude: ' + crd.longitude);
        console.log('Mais ou menos ' + crd.accuracy + ' metros.');
   }
   private _error(err: GeolocationPositionError, reject?: (e:any) => void) {
        const e = this;

        if(reject)
            reject(err);

        if (!e.DEBUG)
            return;

       console.warn('ERROR(' + err.code + '): ' + err.message);
   }

   public getPostion (next?: () => void): Promise<GeolocationCoordinates> {
    return new Promise((sucess,reject) => {
        navigator.geolocation.getCurrentPosition(
            (p) => this._sucess(p, sucess),
            (err) => this._error(err,reject),
            this._options);
    });
   }
   
}

export default GetPosition;