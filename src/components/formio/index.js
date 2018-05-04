import TextFieldComponent from './textfield';
import TextAreaComponent from './textarea';
import EmailComponent from './email';
import PasswordComponent from './password';
import PhoneNumberComponent from './phonenumber';

import NumberComponent from './number';
import CurrencyComponent from './currency';

import DateTimeComponent from './datetime';
import DayComponent from './day';
import TimeComponent from './time';
import AddressComponent from './address';

import CheckBoxComponent from './checkbox';
import RadioComponent from './radio';
import SelectBoxesComponent from './selectboxes';
import SelectComponent from './select';
import ResourceComponent from './resource';

import SurveyComponent from './survey';
import FileComponent from './file';
import SignatureComponent from './signature';

import ContainerComponent from './container';
import DataGridComponent from './datagrid';
import EditGridComponent from './editgrid';

import FormComponent from './form';

import ColumnsComponent from './columns';
import PanelComponent from './panel';
import FieldSetComponent from './fieldset';

import UnknownComponent from './unknown';

const FormioComponent = {
  textfield: TextFieldComponent,
  textarea: TextAreaComponent,
  email: EmailComponent,
  password: PasswordComponent,
  phoneNumber: PhoneNumberComponent,
  number: NumberComponent,
  currency: CurrencyComponent,
  datetime: DateTimeComponent,
  day: DayComponent,
  time: TimeComponent,
  address: AddressComponent,
  checkbox: CheckBoxComponent,
  radio: RadioComponent,
  selectboxes: SelectBoxesComponent,
  select: SelectComponent,
  resource: ResourceComponent,
  survey: SurveyComponent,
  file: FileComponent,
  signature: SignatureComponent,
  container: ContainerComponent,
  datagrid: DataGridComponent,
  editgrid: EditGridComponent,
  columns: ColumnsComponent,
  panel: PanelComponent,
  fieldset: FieldSetComponent,
  unknown: UnknownComponent,
  form: FormComponent,
  create: (component, data, options) => {
    let c = null;

    if (!component) {
      return null;
    } else if (FormioComponent.hasOwnProperty(component.type)) {
      c = new FormioComponent[component.type](component, data, options);
    } else {
      c = new UnknownComponent(component, data, options);
    }
    return c;
  }
};

export default FormioComponent;
