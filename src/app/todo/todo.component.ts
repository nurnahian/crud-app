import { Component, TemplateRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../class/todo';
import { CommonModule } from '@angular/common';
import{NgbModal} from '@ng-bootstrap/ng-bootstrap'


@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  
  todoValue: string = '';

  todoList: Todo[] = [
    {
      content: "Todo 1",
      value: false
    },
    {
      content: "Todo 2",
      value: false
    },
    {
      content: "Todo 3",
      value: false
    }
  ];

  constructor(private modalService:NgbModal) {}

  addTodo(){
    this.todoList.push({content:this.todoValue,value:false});
    this.todoValue='';
  }

  finishedList:Todo[]=[

  ]

  ChangeTodo(i:number){
    
    const item =this.todoList.splice(i,1);
    //console.log(item);
    this.finishedList.push(item[0]);
  }

  ChangeFinished(i:number){
    
    const item =this.finishedList.splice(i,1);
    this.todoList.push(item[0]);
 }

 openModal(content:TemplateRef<Element>,i:number,type:String){
  this.modalService.open(content,{ariaLabelledBy:'modal-basic-title'}).result.then(
    (result)=>{
      if(type=='todoList'){
        this.todoList.splice(i,1);
      }else{
        this.finishedList.splice(i,1);
      }
    },
    (reason)=>{

    }
  )
 }

}
