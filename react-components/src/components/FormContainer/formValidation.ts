import { FormData } from './FormContainer';

export function validate(formData: FormData): { [key in keyof FormData]?: string } {
  const errors: { [key in keyof FormData]?: string } = {};

  if (!formData.text) {
    errors.text = 'Image title is required';
  }

  if (!formData.date) {
    errors.date = 'Image date is required';
  }

  if (!formData.dropdown) {
    errors.dropdown = 'Category is required';
  }

  if (formData.selectedCheckboxOptions.length === 0) {
    errors.selectedCheckboxOptions = 'At least one subscription option is required';
  }

  if (!formData.file) {
    errors.file = 'Image upload is required';
  }

  return errors;
}
