"""empty message

Revision ID: a80c25fc8c48
Revises: b33b0ba7eb86
Create Date: 2018-10-07 23:45:43.897415

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'a80c25fc8c48'
down_revision = 'b33b0ba7eb86'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('pages', sa.Column('is_active', sa.Boolean(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('pages', 'is_active')
    # ### end Alembic commands ###
