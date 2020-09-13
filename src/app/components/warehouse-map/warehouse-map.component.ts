import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import * as _ from 'lodash';

@Component({
  selector: 'app-warehouse-map',
  templateUrl: './warehouse-map.component.html',
  styleUrls: ['./warehouse-map.component.scss']
})
export class WarehouseMapComponent implements OnInit {
  private readonly PLACES_NUMBER = 3;
  private casesGroups = [];
  private casesModels = [];
  private places = [];

  constructor() { }

  ngOnInit(): void {
    const svgField = d3.select('.warehouse-map')
      .append('svg')
      .attr('width', 800)
      .attr('height', 800);

    const warehouseRect = svgField.append('rect')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', 800)
      .attr('height', 800)
      .attr('fill', 'transparent')
      .attr('stroke-width', '2px')
      .attr('stroke', 'black');

    for (let idx = 0; idx < this.PLACES_NUMBER; idx++) {
      this.casesGroups.push(svgField.append('g'));
    }

    this.casesModels = _.map(this.casesGroups, (group, idx) => {
      return group.append('rect')
        .attr('x', 50 + 250 * idx)
        .attr('y', 50)
        .attr('width', 200)
        .attr('height', 700)
        .attr('fill', 'transparent')
        .attr('stroke-width', '2px')
        .attr('stroke', 'black');
    });

    for (let k = 0; k < 3; k++) {
      for (let c = 0; c < 126; c++) {
        this.places.push(
          this.casesGroups[k].append('rect')
            .attr('x', 60 + 250 * k + 32 * (c % 6))
            .attr('y', 70 + 32 * (Math.floor(c / 6)))
            .attr('width', 22)
            .attr('height', 22)
            .attr('fill', 'green')
        );
      }
    }

  }

}
