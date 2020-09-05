import {Component, OnInit} from '@angular/core';
import {DataCardComponent} from '../data-card/data-card.component';
import {DescriptionCardComponent} from '../description-card/description-card.component';

interface CardProp {
  propName: string;
  value: string;
}

interface DataCardContent {
  title: string;
  items: Array<CardProp>;
}

interface DescriptionCardContent {
  title: string;
  description: string;
}

interface AppCard {
  component: any;
  content: DataCardContent | DescriptionCardContent;
}

@Component({
  selector: 'app-dynamic-page',
  templateUrl: './dynamic-content-page.component.html',
  styleUrls: ['./dynamic-content-page.component.scss']
})
export class DynamicContentPageComponent implements OnInit {
  private readonly firstCardItems = [
    {propName: 'Ip address', value: '192.168.1.1'},
    {propName: 'Mask', value: '255.255.255.0'},
    {propName: 'DHCP', value: 'Enabled'},
    {propName: 'DNS 1 address', value: '8.8.8.8'}
  ];
  private readonly secondCardItems = [
    {propName: 'MAC address', value: '12:0D:15:60:70:80'},
    {propName: 'Device name', value: 'Router 8080'},
  ];
  private readonly thirdCardItems = [
    {propName: 'SSID', value: 'Wi-fi access point'},
    {propName: 'Protection', value: 'WPA-PSK'},
    {propName: 'Password', value: '12345678'}
  ];

  public appCards: Array<AppCard>;

  constructor() { }

  ngOnInit(): void {
    this.appCards = [
      {component: DataCardComponent, content: {title: 'Network data', items: this.firstCardItems}},
      {component: DescriptionCardComponent, content: {title: 'Description card 1', description: 'Description for card 1'}},
      {component: DataCardComponent, content: {title: 'Device data', items: this.secondCardItems}},
      {component: DescriptionCardComponent, content: {title: 'Description card 2', description: 'Description for card 2'}},
      {component: DataCardComponent, content: {title: 'Wi-fi data', items: this.thirdCardItems}},
      {component: DescriptionCardComponent, content: {title: 'Description card 3', description: 'Description for card 3'}},
    ];
  }

}
