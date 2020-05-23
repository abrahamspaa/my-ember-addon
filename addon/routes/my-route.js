import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  myService: service(),
  model() {
    return {
      version: this.get('myService.version')
    };
  }
});
