describe('Feedback Form Test', () => {
    it('should successfully submit the feedback form', () => {
      cy.visit('https://www.testograf.ru/ru/blog/feedback-form-template');

      // Заполнение формы
      cy.get('input[name="name"]').type('Тест Имя');
      cy.get('input[name="email"]').type('test@example.com');
      cy.get('input[name="phone"]').type('+1234567890');
      cy.get('textarea[name="message"]').type('Это тестовое сообщение.');

      // Отправка формы
      cy.get('button[type="submit"]').click();

      // Проверка успешного сообщения
      cy.contains('Ваше сообщение успешно отправлено!').should('be.visible');
    });
  });
  
