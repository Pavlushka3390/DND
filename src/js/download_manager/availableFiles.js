import TEST1 from '../../files/test1.pdf';
import TEST2 from '../../files/test2.pdf';
import TEST3 from '../../files/test3.pdf';
import DownloadItem from './downloadItem';

export default class AvailableFiles {
  constructor(downloadCallback) {
    this.downloadCallback = downloadCallback;
    this.el = document.createElement('div');
    this.el.classList.add('available-files');

    const title = 'Available files';

    this.el.innerHTML = `
    <span class="align-self-start badge bg-secondary my-1">${title}</span>
    <table class="table">
      <thead>
      </thead>
      <tbody>
      </tbody>
    </table>
    `;

    this.files = [
      ['test1', TEST1, 'test1.pdf'],
      ['test2', TEST2, 'test2.pdf'],
      ['test3', TEST3, 'test3.pdf'],
    ].map(
      ([name, src, downloadName]) =>
        new DownloadItem(src, name, downloadName, downloadCallback)
    );

    const tbody = this.el.querySelector('tbody');

    this.files.forEach((item) => {
      item.bindToDOM(tbody);
    });
  }

  bindToDOM(parentElement) {
    parentElement.insertAdjacentElement('beforeEnd', this.el);
  }
}
