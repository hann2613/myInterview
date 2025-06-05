const { createApp } = Vue;

createApp({
  data() {
    return {
      currentPage: 'intro',
      flashcards: [
        { question: 'why you choose our company', answer: 'answer...' },
        { question: 'What is your plan?', answer: 'I wishxxx...' }
      ],
      newQuestion: '',
      newAnswer: '',
      editIndex: null,
      editQuestion: '',
      editAnswer: ''
    };
  },
  methods: {
    addCard() {
      this.flashcards.push({
        question: this.newQuestion.trim(),
        answer: this.newAnswer.trim()
      });
      this.newQuestion = '';
      this.newAnswer = '';
    },
    deleteCard(index) {
      if (confirm('Are you sure you want to delete this question？')) {
        this.flashcards.splice(index, 1);
      }
    },
    saveEdit(index) {
      if (!this.editQuestion.trim()) {
        alert('Cannot be empty');
        return;
      }
      this.flashcards[index].question = this.editQuestion.trim();
      this.flashcards[index].answer = this.editAnswer.trim();
      this.editIndex = null;
    },
    cancelEdit() {
      this.editIndex = null;
    }
  },
  watch: {
    editIndex(newIndex) {
      if (newIndex !== null) {
        this.editQuestion = this.flashcards[newIndex].question;
        this.editAnswer = this.flashcards[newIndex].answer;
      }
    }
  }
}).mount('#app');
