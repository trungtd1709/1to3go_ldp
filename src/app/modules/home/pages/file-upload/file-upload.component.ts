import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject, takeUntil } from 'rxjs';

export interface FileTypeOption {
  value: string;
  label: string;
}

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit, OnDestroy {
  uploadForm!: FormGroup;
  selectedFiles: File[] = [];
  allowMultiple: boolean = false;
  
  private destroy$ = new Subject<void>();

  fileTypes: FileTypeOption[] = [
    { value: 'INVENTORY_HEALTH', label: 'Inventory Health' },
    { value: 'SALES_REPORT', label: 'Sales Report' },
    { value: 'CUSTOMER_DATA', label: 'Customer Data' },
    { value: 'PRODUCT_CATALOG', label: 'Product Catalog' },
    { value: 'ORDER_HISTORY', label: 'Order History' }
  ];

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private initializeForm(): void {
    this.uploadForm = this.formBuilder.group({
      fileType: ['', [Validators.required]],
      allowMultiple: [false]
    });

    // Subscribe to allowMultiple changes to update the flag
    this.uploadForm.get('allowMultiple')?.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((value: boolean) => {
        this.allowMultiple = value;
        // Keep first file when switching from multiple to single mode
        if (!value && this.selectedFiles.length > 1) {
          this.selectedFiles = [this.selectedFiles[0]];
        }
      });
  }

  onFileSelect(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      if (this.allowMultiple) {
        this.selectedFiles = Array.from(input.files);
      } else {
        this.selectedFiles = input.files.length > 0 ? [input.files[0]] : [];
      }
    }
  }

  removeFile(index: number): void {
    this.selectedFiles = this.selectedFiles.filter((_, i) => i !== index);
  }

  clearAllFiles(): void {
    this.selectedFiles = [];
  }

  formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  isFormValid(): boolean {
    return this.uploadForm.valid && this.selectedFiles.length > 0;
  }

  onSubmit(): void {
    if (this.isFormValid()) {
      // Show success snackbar
      this.snackBar.open(
        `Successfully uploaded ${this.selectedFiles.length} file(s)!`,
        'Close',
        {
          duration: 4000,
          horizontalPosition: 'end',
          verticalPosition: 'top',
          panelClass: ['success-snackbar']
        }
      );
      
      this.resetForm();
    } else {
      this.markAllFieldsAsTouched();
      
      if (this.selectedFiles.length === 0) {
        this.snackBar.open(
          'Please select at least one file to upload',
          'Close',
          {
            duration: 3000,
            horizontalPosition: 'end',
            verticalPosition: 'top',
            panelClass: ['error-snackbar']
          }
        );
      }
    }
  }

  private resetForm(): void {
    this.uploadForm.reset();
    this.uploadForm.patchValue({ allowMultiple: false });
    this.selectedFiles = [];
    this.allowMultiple = false;
  }

  private markAllFieldsAsTouched(): void {
    Object.keys(this.uploadForm.controls).forEach(key => {
      this.uploadForm.get(key)?.markAsTouched();
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.uploadForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }
}
