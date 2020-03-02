import { Component, OnInit } from '@angular/core';
import {Activity} from "../../model/activity";
import {ActivatedRoute, Router} from "@angular/router";
import {ActivityService} from "../../activity/activity.service";
import {PoolService} from "../../pool/pool.service";
import {Observable} from "rxjs";
import {Pool} from "../../model/pool";

@Component({
  selector: 'app-activity-form',
  templateUrl: './activity-form.component.html',
  styleUrls: ['./activity-form.component.css']
})
export class ActivityFormComponent implements OnInit {

  activity: Activity;
  pools: Pool[];

  ngOnInit(): void {
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private activityService: ActivityService,
    private poolsService: PoolService) {
    this.activity = new Activity();
    this.poolsService.findAll()
      .subscribe(pools => {
        this.pools = pools as Pool[]
      })
  }

  onSubmit() {
    this.activityService.save(this.activity).subscribe(result => this.back());
  }

  back() {
    this.router.navigate(['/activitys']).then(r=>console.log("create OK"));
  }
}
