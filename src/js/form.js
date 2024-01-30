/* eslint-disable no-console */
import IMask from 'imask';

const PHONE_MASK_OPTIONS = {
  mask: '+7 (000) 000-00-00',
};

const PHONE_REGEX = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;

export default function useForm() {
  const applicantForm = document.getElementById('form');
  const phoneInput = document.getElementById('phone');
  const nameInput = document.getElementById('name');
  const checkbox = document.querySelector('#checkbox');
  const checkmark = document.querySelector('.checkmark');
  const message = document.querySelector('.form__message');
  const btnSubmit = document.querySelector('.form__btn');
  const phoneMask = IMask(phoneInput, PHONE_MASK_OPTIONS);

  function validatePhone(phoneValue) {
    const isValid = phoneValue.match(PHONE_REGEX);
    if (isValid) {
      phoneInput.classList.remove('err');
      return true;
    }
    phoneInput.classList.add('err');
    return false;
  }

  function validateCheckbox() {
    if (checkbox.checked) {
      checkmark.classList.remove('err');
      return true;
    }
    checkmark.classList.add('err');
    return false;
  }

  function updateMaskOnFocusIn() {
    phoneMask.updateOptions({ lazy: false });
  }

  function updateMaskOnFocusOut() {
    phoneMask.updateOptions({ lazy: true });
  }

  function handleCheckboxChange() {
    if (checkbox.checked) {
      checkmark.classList.remove('err');
    }
  }

  function createAlertMessage(value, text) {
    if (
      message.classList.contains('success') ||
      message.classList.contains('error')
    ) {
      message.classList.remove('success');
      message.classList.remove('error');
      message.innerHTML = '';
    }

    if (value === 'success') {
      message.innerHTML = text;
      message.classList.add('form__message--active');
      message.classList.add('success');
    } else {
      message.innerHTML = text;
      message.classList.add('form__message--active');
      message.classList.add('error');
    }
  }

  async function handleFormSubmit(event) {
    event.preventDefault();
    phoneMask.updateValue();

    const isValidPhone = validatePhone(phoneMask.value);
    const isValidCheckbox = validateCheckbox();
    const isValidForm = isValidPhone && isValidCheckbox;

    const data = new FormData(event.target);

    if (isValidForm) {
      message.innerHTML = '';
      btnSubmit.disabled = true;
      btnSubmit.innerHTML = `
      <div aria-label="Loading..." role="status" class="loader">
      <svg class="icon" viewBox="0 0 256 256">
        <line x1="128" y1="32" x2="128" y2="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
        <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
        <line x1="224" y1="128" x2="192" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
        <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
        <line x1="128" y1="224" x2="128" y2="192" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
        <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
        <line x1="32" y1="128" x2="64" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
        <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
      </svg>
      <span class="loading-text">Отправка...</span>
      </div>
      `;

      try {
        const response = await fetch('sendmail.php', {
          method: 'POST',
          body: data,
        });

        if (response.ok) {
          createAlertMessage(
            'success',
            'Спасибо за заявку! Мы свяжемся с вами в ближайшее время.',
          );
        } else {
          createAlertMessage('error', 'Произошла ошибка при отправке данных');
        }
        btnSubmit.innerHTML = 'Отправить';
      } catch (error) {
        console.error(error);
      } finally {
        setTimeout(() => {
          message.classList.remove('form__message--active');
          phoneInput.value = '';
          nameInput.value = '';
          checkbox.checked = false;
          btnSubmit.disabled = false;
        }, 5000);
      }
    } else if (!checkbox.checked) {
      createAlertMessage(
        'error',
        'Примите согласие на обработку персональных данных',
      );
    } else if (!isValidPhone) {
      createAlertMessage('error', 'Некорректный номер телефона');
    } else {
      createAlertMessage('error', 'Заполните обязательные поля');
    }
  }

  phoneInput.addEventListener('input', () => {
    if (validatePhone(phoneMask.value)) {
      phoneInput.classList.remove('err');
    }
  });
  phoneInput.addEventListener('focusin', updateMaskOnFocusIn);
  phoneInput.addEventListener('focusout', updateMaskOnFocusOut);
  checkbox.addEventListener('change', handleCheckboxChange);
  applicantForm.addEventListener('submit', handleFormSubmit);
}
