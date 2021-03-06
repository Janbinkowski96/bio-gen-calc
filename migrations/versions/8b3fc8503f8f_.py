"""empty message

Revision ID: 8b3fc8503f8f
Revises: 420fa573fe03
Create Date: 2018-08-01 22:02:04.559843

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import mysql

# revision identifiers, used by Alembic.
revision = '8b3fc8503f8f'
down_revision = '420fa573fe03'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('users', 'password')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('users', sa.Column('password', mysql.VARCHAR(collation='utf8_polish_ci', length=64), nullable=True))
    # ### end Alembic commands ###
