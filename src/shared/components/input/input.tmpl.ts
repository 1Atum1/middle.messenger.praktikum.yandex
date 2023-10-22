export const tmpl = `
     <label>{{inputText}}</label>
     <input name="{{nameAttr}}" {{#if disabled}} disabled {{/if}} type="{{type}}" placeholder="{{placeholder}}">
     {{errors}}
     {{#if errors.length}} 
        <span id="validationMessage">{{errors}}</span>
     {{/if}}
`;
