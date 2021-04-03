import { Component, OnInit } from '@angular/core';
import { Address, PrivKey, PubKey } from '@ts-bitcoin/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  privKey: PrivKey;
  pubKey: PubKey;
  address: Address;

  constructor() {
    this.privKey = PrivKey.fromRandom();
    this.pubKey = PubKey.fromPrivKey(this.privKey);
    this.address = Address.fromPubKey(this.pubKey);
  }

  ngOnInit() {

  }
}
