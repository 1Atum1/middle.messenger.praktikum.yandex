export const tmpl = `
     <div class="input-container">
         <label>{{inputText}}</label>
         <input name="{{nameAttr}}" {{#if disabled}} disabled {{/if}} type="{{type}}" placeholder="{{placeholder}}">
     </div>
`;
