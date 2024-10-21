import { definePreset } from '@primevue/themes';
import Aura from '@primevue/themes/aura';

const GoCats = definePreset(Aura, {
    semantic: {
        primary: {
            50: '{purple.50}',
            100: '{purple.100}',
            200: '{purple.200}',
            300: '{purple.300}',
            400: '{purple.400}',
            500: '{purple.500}',
            600: '{purple.600}',
            700: '{purple.700}',
            800: '{purple.800}',
            900: '{purple.900}',
            950: '{purple.950}'
        }
    }
});

export default {
    preset: GoCats,
    options: {
        darkModeSelector: '.p-dark'
    }
};