import { definePreset } from '@primeng/themes';
import theme from '@primeng/themes/lara';

export const MyPreset = definePreset(theme, {
    semantic: {
        primary: {
            50: '{lime.50}',
            100: '{lime.100}',
            200: '{lime.200}',
            300: '{lime.300}',
            400: '{lime.400}',
            500: '{lime.500}',
            600: '{lime.600}',
            700: '{lime.700}',
            800: '{lime.800}',
            900: '{lime.900}',
            950: '{lime.950}'
        }
    }
});

