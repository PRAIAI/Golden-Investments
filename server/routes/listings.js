import express from 'express';
import { getHomeListings, getDiscoverListings, toggleWishlist } from '../controllers/listingController.js';

const router = express.Router();

// GET /api/listings/home (Startseite)
router.get('/home', getHomeListings);

// GET /api/listings/discover (Entdeckungen-Seite)
router.get('/discover', getDiscoverListings);

// POST /api/listings/wishlist (Wunschliste umschalten)
router.post('/wishlist', toggleWishlist);

export default router;
