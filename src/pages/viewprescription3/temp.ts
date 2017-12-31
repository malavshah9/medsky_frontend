<div class="row responsive-sm">
<div class="col">Written by</div>
<div class="col">{{doc_name}}</div>
</div>

<div class="row">
<div class="col">Date</div>
<div class="col">{{pres_date}}</div>
</div>

<div class="row">
  <div class="col">Medicines</div>
  <div class="col">Timings</div>
</div>


<table border="2px">
<tr >
    <td>Written By Doctor</td>
    <td colspan="5">{{doc_name}}</td>
</tr>
<tr>
    <td>Date</td>
    <td colspan="5">{{pres_date}}</td>
</tr>
<tr rowspan="2">
    <td>Medicine Name</td>
    <td colspan="5">Timings</td>
</tr>
<tr>
  <td>-</td>
  <td>Morning Doses</td>
  <td>Noon Doses</td>
  <td>Night Doses</td>
  <td>Number of Days</td>
</tr>

<tr *ngFor="let item of med_name,let i=index">
  
  <td>{{item}}</td>
  </tr>
  






  
<!--    <td>
      <tr *ngFor="let item of medicine_name">
        <td>{{item}}</td>
      </tr>
    </td>

    <td>
      <tr *ngFor="let item of mor_array">
        <td>{{item}}</td>
      </tr>
    </td>

    <td>
      <tr *ngFor="let item of non_array">
        <td>{{item}}</td>
      </tr>
    </td>


    <td>
      <tr *ngFor="let item of nig_array">
        <td>{{item}}</td>
      </tr>
    </td>


    <td>
      <tr *ngFor="let item of day_array">
        <td>{{item}}</td>
      </tr>
    </td>
  -->
  <!--<tr *ngFor="let i1 of medicine_name,let i=index">

<td>{{i1}}</td>
<td>{{i}}</td>
  </tr>
-->
<!--
<td>
<ion-col>
<ion-row *ngFor="let l1 of medicine_name" >

    {{l1}}
</ion-row>
</ion-col>  
</td>
<td>
<ion-col>
    <ion-row *ngFor="let l1 of mor_array">
        {{l1}}
    </ion-row>
</ion-col>
</td>-->
<!--<td>
 <tr *ngFor="let item of medicine_name">
 
    {{item}}
 
</tr>
</td>


<td >
   <tr   *ngFor="let item of mor_array">
   
      {{item}}
     
  </tr>
  
  </td>

  <td  >
      <tr  *ngFor="let item of non_array">
     
        {{item}}
    
    </tr>
    </td>

    <td >
      <tr  *ngFor="let item of nig_array">
          
          {{item}}
      
      </tr>
      </td>

      <td  >
        <tr *ngFor="let item of day_array">
         
            {{item}}
          
        </tr>
        </td>-->
  
  <!--</table>-->

 


<!--<ion-content padding class="card-background-page">
    <h2 color="white">Explore</h2>
  <ion-grid>
    <ion-row>
        <ion-col width-50>
            <ion-card>
                <h1>Hello</h1>
              <div class="card-title">São Paulo</div>
                <div class="card-subtitle">41 Listings</div>
            </ion-card>
        </ion-col>
        <ion-col width-50>
          <ion-card>
        <h1>Hello</h1>
            <div class="card-title">Amsterdam</div>
            <div class="card-subtitle">64 Listings</div>
          </ion-card>
        </ion-col>
    </ion-row>
    <ion-row>
      <ion-col width-50>
          <ion-card>
              <h1>Hello</h1>
            <div class="card-title">San Francisco</div>
            <div class="card-subtitle">72 Listings</div>
          </ion-card>
      </ion-col>
      <ion-col width-50>
          <ion-card>
              <h1>Hello</h1>
            <div class="card-title">Madison</div>
            <div class="card-subtitle">28 Listings</div>
          </ion-card>
      </ion-col>
    </ion-row>
  </ion-grid>
  </ion-content>-->
</ion-content>
