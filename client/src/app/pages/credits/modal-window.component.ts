import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Credit } from 'src/app/models/credit';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.css'],
})
export class ModalWindow implements OnInit {
  ngOnInit(): void {
  }

  @Input() header: string = ""
  @Output() close = new EventEmitter<void>()
  @Output() save = new EventEmitter<void>()

  credit!: Credit;
}