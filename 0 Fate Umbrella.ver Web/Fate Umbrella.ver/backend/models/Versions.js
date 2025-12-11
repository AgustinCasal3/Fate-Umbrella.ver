import mongoose from 'mongoose';

const versionSchema = new mongoose.Schema({
  version: {
    type: String,
    required: true,
    unique: true
  },
  versionName: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  quote: {
    text: {
      type: String,
      required: false
    },
    author: {
      type: String,
      required: false
    }
  },
  introduction: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  sections: [{
    title: {
      type: String,
      required: true
    },
    type: {
      type: String,
      enum: ['list', 'paragraph'],
      required: true
    },
    items: [{
      type: String,
      required: true
    }]
  }],
  images: [{
    title: {
      type: String,
      required: true
    },
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    }
  }],
  devNotes: {
    text: [{
      type: String,
      required: true
    }],
    conceptArt: {
      src: {
        type: String,
        required: false
      },
      artist: {
        type: String,
        required: false
      },
      link: {
        type: String,
        required: false
      }
    }
  }
}, {
  timestamps: true
}, {collection: 'Versions'});

export const Version = mongoose.model('Version', versionSchema, 'Versions');