import Html2Pdf from 'html2pdf.js';
import FormioExportUtils from '../../utils';

const worker = Html2Pdf();

export default (config = { pagebreak: { avoid: ['div'] } }) => {
  config = FormioExportUtils.verifyProperties(config, {
    pagebreak: {
      type: Element,
      required: true
    }
  });
  return worker.set(config);
};

