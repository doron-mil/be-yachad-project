export class row_data {

  constructor(id: number,record_type: number, rule_identifiers: string, source: string[], destination: string[], services_applications: string[]) {
    this.id = id;
    this.record_type = record_type;
    this.rule_identifiers = rule_identifiers;
    this.source = source;
    this.destination = destination;
    this.services_applications = services_applications;
  }


  id: number;
  record_type: number;
  isExpanded:boolean = false;
  rule_identifiers : string ;
  source : string[];
  destination: string[];
  services_applications: string[];
  hits:number;
  published_date:Date;
  block:boolean = false;
}
