import {Component, Injectable} from "@angular/core";

// ❌ MAL

enum ReportType {
  JSON,
  XML
}

@Injectable({
  providedIn: 'root'
})
export class ReportBadService {
  generateReport(data: any, type: ReportType): string {
    if (type === ReportType.JSON) {
      return JSON.stringify(data);
    } else if (type === ReportType.XML) {
      // Supongamos que esta función convierte el data a un string XML
      return this.convertToXML(data);
    }
    return '';
  }

  private convertToXML(data: any): string {
    // Lógica de conversión a XML...
    return '';
  }
}


// ✅

interface ReportStrategy {
  generate(data: any): string;
}

class JsonReport implements ReportStrategy {
  generate(data: any): string {
    return JSON.stringify(data);
  }
}

class XmlReport implements ReportStrategy {
  generate(data: any): string {
    // Lógica de conversión a XML...
    return '';
  }
}

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  generateReport(strategy: ReportStrategy, data: any): string {
    return strategy.generate(data);
  }
}

@Component({
  selector: 'app-some',
  template: '',
  standalone: true
})
export class SomeComponent {
  report!: string;

  constructor(
    private reportService: ReportService,
    private reportStrategy: XmlReport // inyectamos la estrategia deseada
  ) {}

  getReport(data: any) {
    this.report = this.reportService.generateReport(this.reportStrategy, data);
  }
}
