export const tmpl = `
     <label>{{inputText}}</label>
     <input name="{{nameAttr}}" {{#if disabled}} disabled {{/if}} type="{{type}}" placeholder="{{placeholder}}">
     <span class="errors">{{errors}}</span>
`;
