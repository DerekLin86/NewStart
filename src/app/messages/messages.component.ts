import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService, private dialogService: DialogService) {}

  ngOnInit() {
  }

  confirm_clear() {
    this.dialogService.confirm('Do you really want to clear?').then(
      result => {
        if (result) {
          this.messageService.clear();
        }
    });
  }

}
