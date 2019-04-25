import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ShareService {


    key: string = 'musteri_id;'
    result: any;
    constructor(private db: Storage) {
    }

    setUserID(musteri_id: any) {
        this.db.set(this.key, musteri_id);
    }

    getUserID() {
        this.db.get(this.key).then((val) => {
            this.result = val;
        });
        return this.result;
    }
    clear() {
        this.db.clear();
    }
}