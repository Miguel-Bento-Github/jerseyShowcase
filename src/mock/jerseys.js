import jersey1 from '@/assets/images/robey-1.png';
import jersey2 from '@/assets/images/robey-4.png';
import jersey3 from '@/assets/images/robey-5.png';
import jersey4 from '@/assets/images/robey-6.png';
import jersey5 from '@/assets/images/robey.png';

// Mapping the jerseys to its colors and patterns will make the logic much simpler
// By agglomerating all the presentational logic together
export default {
  'jersey-1': {
    colors: ['blue, yellow'],
    pattern: 'striped',
    src: jersey1,
  },
  'jersey-2': {
    colors: ['blue, black'],
    pattern: 'striped',
    src: jersey2,
  },
  'jersey-3': {
    colors: ['black, blue'],
    pattern: 'striped',
    src: jersey3,
  },
  'jersey-4': {
    colors: ['black, blue'],
    pattern: 'striped',
    src: jersey4,
  },
  'jersey-5': {
    colors: ['black, yellow'],
    pattern: 'striped',
    src: jersey5,
  },
};
