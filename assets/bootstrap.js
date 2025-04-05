import { startStimulusApp } from '@symfony/stimulus-bridge';

const app = startStimulusApp();
// Tu peux enregistrer ici des contrôleurs supplémentaires
// app.register('some_controller_name', SomeImportedController);

window.application = app;