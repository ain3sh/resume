import React from 'react';
import { render, screen } from '@testing-library/react';
import Resume from './resume/Resume';
import resumeData from '../data/resumeData';

test('renders resume header name', () => {
  render(<Resume data={resumeData} theme="dark" />);
  const nameElement = screen.getByText(resumeData.personalInfo.name);
  expect(nameElement).toBeInTheDocument();
});