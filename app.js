const { createApp } = Vue;

createApp({
  data() {
    return {
      currentPage: "intro",

      // Introduction
      intro: {
        education: "",
        work: "",
        skills: "",
        certifications: "",
        fullText: "",
      },
      introDraft: {
        education: "",
        work: "",
        skills: "",
        certifications: "",
        fullText: "",
      },
      editingIntro: false,
      editingIntroText: false,

      // Questions
      flashcards: [
        
      ],
      newQuestion: "",
      newAnswer: "",
      editIndex: null,
      editQuestion: "",
      editAnswer: "",

      // Projects
      projects: [
       
      ],
      newProject: {
        name: "",
        keyPoints: [""],
        description: "",
      },
      editProjectIndex: null,
      projectDraft: {
        name: "",
        keyPoints: [],
        description: "",
      },
    };
  },
  methods: {
    // Intro
    saveIntro() {
      this.intro = { ...this.introDraft };
      this.editingIntro = false;
      this.editingIntroText = false;
    },
    cancelIntroEdit() {
      this.editingIntro = false;
      this.editingIntroText = false;
    },

    // Flashcards
    toggleAnswer(index) {
      this.flashcards[index].showAnswer = !this.flashcards[index].showAnswer;
    },
    addCard() {
      this.flashcards.push({
        question: this.newQuestion.trim(),
        answer: this.newAnswer.trim(),
        showAnswer: false,
      });
      this.newQuestion = "";
      this.newAnswer = "";
    },
    deleteCard(index) {
      if (confirm("Are you sure you want to delete this question?")) {
        this.flashcards.splice(index, 1);
      }
    },
    startEdit(index) {
      this.editIndex = index;
      this.editQuestion = this.flashcards[index].question;
      this.editAnswer = this.flashcards[index].answer;
    },
    saveEdit(index) {
      if (!this.editQuestion.trim()) {
        alert("Question cannot be empty.");
        return;
      }
      this.flashcards[index].question = this.editQuestion.trim();
      this.flashcards[index].answer = this.editAnswer.trim();
      this.editIndex = null;
    },
    cancelEdit() {
      this.editIndex = null;
    },

    // Projects
    startEditingProject(index) {
      this.editProjectIndex = index;
      this.projectDraft = JSON.parse(JSON.stringify(this.projects[index]));
    },
    saveProject(index) {
      this.projects[index] = JSON.parse(JSON.stringify(this.projectDraft));
      this.editProjectIndex = null;
    },
    cancelEditProject() {
      this.editProjectIndex = null;
    },
    deleteProject(index) {
      if (confirm("Delete this project?")) {
        this.projects.splice(index, 1);
      }
    },
    addKeyPoint() {
      this.projectDraft.keyPoints.push("");
    },
    addNewKeyPoint() {
      this.newProject.keyPoints.push("");
    },
    addProject() {
      this.projects.push(JSON.parse(JSON.stringify(this.newProject)));
      this.newProject = {
        name: "",
        keyPoints: [""],
        description: "",
      };
    },
  },
  watch: {
    editIndex(newIndex) {
      if (newIndex !== null) {
        this.editQuestion = this.flashcards[newIndex].question;
        this.editAnswer = this.flashcards[newIndex].answer;
      }
    },
  },
}).mount("#app");
