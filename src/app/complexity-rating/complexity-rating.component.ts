import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-complexity-rating",
  templateUrl: "./complexity-rating.component.html",
  styleUrls: ["./complexity-rating.component.scss"]
})
export class ComplexityRatingComponent implements OnInit {
  @Input() complexity: number = 0;

  constructor() {}

  ngOnInit() {}
}
