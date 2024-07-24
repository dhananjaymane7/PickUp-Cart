const express = require("express");
const router = express.Router();

const db = require('../models/db')

const generateRandomOrderId = () => {
    const randomChars = String.fromCharCode(65 + Math.floor(Math.random() * 26)) +
        String.fromCharCode(65 + Math.floor(Math.random() * 26));

    const randomNumber = Math.floor(1000 + Math.random() * 9000);

    return `${randomChars}${randomNumber}`;
};

router.post("/new_QuickOrder", async (req, res) => {
    try {
        const {

            pname,
            pnumber,
            paddress,
            ppin,
            dpin,
            packageType,
            orderDate,
        } = req.body;


        const orderId = generateRandomOrderId();


        const q = "INSERT INTO quickorders (orderId ,pname, pnumber,  paddress, ppin,  dpin,  packageType, orderDate) VALUES (?,?,?, ?, ?, ?,?,?)";
        const values = [
            orderId, pname, pnumber, paddress, ppin, dpin, packageType, orderDate,
        ];

        const data = await db.queryAsync(q, values);

        return res.json({ message: 'Order created successfully', orderId, data });
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});

// getOrders route
router.get("/get_QuickOrder", async (req, res) => {
    try {
        const q = "SELECT * FROM quickorders";
        const data = await db.queryAsync(q);

        return res.json({ message: 'Orders retrieved successfully', data });
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});

// getOrderById route
router.get("/getQuickOrderById/:id", async (req, res) => {
    try {
        const orderId = req.params.id;
        const q = "SELECT * FROM quickorders WHERE id = ?";
        const data = await db.queryAsync(q, [orderId]);

        if (data.length === 0) {
            return res.status(404).json({ message: 'Order not found' });
        }

        return res.json({ message: 'Order retrieved successfully', data: data[0] });
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});





router.put("/update_QuickOrder/:id", async (req, res) => {
    try {
        const id = req.params.id;

        const {
            pname,
            pnumber,
            paddress,
            ppin,
            dpin,
            packageType,
            orderDate
        } = req.body;

  
        const qUpdate =
            "UPDATE quickorders SET pname = ?, pnumber = ?, paddress = ?, ppin = ?, dpin = ?, packageType = ?, orderDate = ? WHERE id = ?";

        const valuesUpdate = [pname, pnumber, paddress, ppin, dpin, packageType, orderDate, id];


        const data = await db.queryAsync(qUpdate, valuesUpdate);

        if (data.affectedRows === 0) {
            return res.status(404).json({ message: 'Order not found' });
        }

        return res.json({ message: 'Order details updated successfully' });
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});

router.delete("/delete_QuickOrder/:id", async (req, res) => {
    try {
        const orderId = req.params.id;

        const qDelete = "DELETE FROM quickorders WHERE id = ?";
        const data = await db.queryAsync(qDelete, [orderId]);

        if (data.affectedRows === 0) {
            return res.status(404).json({ message: 'Order not found' });
        }

        return res.json({ message: 'Order deleted successfully' });
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});

// getTotalOrders route
router.get("/getTotalQuickOrder", async (req, res) => {
    try {
        const qTotalOrders = "SELECT COUNT(*) as totalQuickOrders FROM quickorders";
        const totalQuickOrders = await db.queryAsync(qTotalOrders);

        return res.json({ message: 'Total quickorders retrieved successfully', totalQuickOrders: totalQuickOrders[0].totalQuickOrders });
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});

router.get("/getTotalQuickPendingOrders", async (req, res) => {
    try {
      const qTotalPendingOrders = "SELECT COUNT(*) as totalQuickPendingOrders FROM orders WHERE status = 'pending'";
      const totalQuickPendingOrders = await db.queryAsync(qTotalPendingOrders);
  
      return res.json({ message: 'Total pending orders retrieved successfully', totalQuickPendingOrders: totalQuickPendingOrders[0].totalQuickPendingOrders });
    } catch (error) {
      return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
  });
  
  // getTotalPickedUpOrders route
  router.get("/getTotalQuickPickedUpOrders", async (req, res) => {
    try {
      const qTotalPickedUpOrders = "SELECT COUNT(*) as totalQuickPickedUpOrders FROM orders WHERE status = 'picked-up'";
      const totalQuickPickedUpOrders = await db.queryAsync(qTotalPickedUpOrders);
  
      return res.json({ message: 'Total picked-up orders retrieved successfully', totalQuickPickedUpOrders: totalQuickPickedUpOrders[0].totalQuickPickedUpOrders });
    } catch (error) {
      return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
  });
  

module.exports = router;
